const values = require('lodash/values')
const path = require('path')

module.exports = function (sequelize) {
  /*
    Models
  */

  const User = sequelize.import(path.join(__dirname, 'user'))
  const AccountType = sequelize.import(path.join(__dirname, 'accountType'))
  const Doc = sequelize.import(path.join(__dirname, 'document'))
  const Plan = sequelize.import(path.join(__dirname, 'plan'))
  const Section = sequelize.import(path.join(__dirname, 'section'))
  const Chapter = sequelize.import(path.join(__dirname, 'chapter'))
  const ChapterTopic = sequelize.import(path.join(__dirname, 'chapterTopic'))
  const MasterTopic = sequelize.import(path.join(__dirname, 'masterTopic'))

  const accountTypes = {
    DEMO: 'demo',
    LIMITED: 'limited',
    PREMIUM: 'premium',
    GOLD: 'gold',
    ADMIN: 'admin'
  }

  const db = {
    sequelize: sequelize,
    User,
    AccountType,
    accountTypes,
    Doc,
    Plan,
    Section,
    Chapter,
    ChapterTopic,
    MasterTopic
  }

  /*
    Associations
  */

  User.belongsTo(AccountType)

  Doc.belongsTo(User)
  User.hasMany(Doc)

  Plan.belongsTo(Doc)
  Doc.hasMany(Plan)

  Section.belongsTo(Plan)
  Plan.hasMany(Section)

  Chapter.belongsTo(Doc)
  Doc.hasMany(Chapter)

  ChapterTopic.belongsTo(Chapter)
  Chapter.hasMany(ChapterTopic)

  MasterTopic.belongsTo(Doc)
  Doc.hasMany(MasterTopic)

  ChapterTopic.belongsTo(MasterTopic)
  MasterTopic.hasMany(ChapterTopic)

  /*
    Create tables
  */
  db.sync = sequelize.sync().then(() => {
      /*
        Init static data
      */
    const types = values(db.accountTypes)
    const accountTypePromises = []
    for (const type of types) {
      const promise = AccountType.findCreateFind({
        where: {
          name: type
        }
      })
      accountTypePromises.push(promise)
      promise.then(([type, created]) => {
        if (created) {
          console.log(`Created account type "${type.name}".`)
        }
      })
    }

    Promise.all(accountTypePromises).then(() => {
      AccountType.findOne({
        where: { name: accountTypes.DEMO }
      }).then(({ id: demoId }) => {
        User.findCreateFind({
          where: {
            email: 'demo@edwardtheapp.com'
          },
          include: [{
            model: AccountType,
            where: {
              'name': accountTypes.DEMO
            }
          }],
          defaults: {
            accountTypeId: demoId,
            email: 'demo@edwardtheapp.com',
            password: 'DEMO'
          }
        }).then(([user, created]) => {
          if (created) {
            console.log(`Created demo user.`)
          }

          db.DemoUser = user
        })
      })
    })
  })

  return db
}
