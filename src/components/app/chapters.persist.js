class ChapterStorage {
  constructor () {
    this.accountType = 'Limited Account'
    this.accountMessage = 'Data is stored unsafely on your computer and may be lost.'
    this.storage = window.localStorage
    this.getStorageKeys = () => Object.keys(window.localStorage)

    this.chapterKeyPrefix = fileId => `${fileId}_CHAPTER_`
    this.chapterOrderKey = fileId => `${fileId}_CHAPTER_ORDER`
    this.topicKeyPrefix = fileId => `${fileId}_TOPIC_`
    this.topicOrderKey = fileId => `${fileId}_TOPIC_ORDER`

    this.orderDelimiter = '___'
  }

  arrangeChapters (fileId, chapterIds) {
    this.storage.setItem(this.chapterOrderKey(fileId), chapterIds.join(this.orderDelimiter))
  }

  arrangeTopics (fileId, topicIds) {
    this.storage.setItem(this.topicOrderKey(fileId), topicIds.join(this.orderDelimiter))
  }

  deleteChapter (fileId, chapterId) {
    const key = this.getChapterKey(fileId, chapterId)
    this.storage.removeItem(key)
  }

  deleteTopic (fileId, topicId) {
    const key = this.getTopicKey(fileId, topicId)
    this.storage.removeItem(key)
  }

  getAllChapters (fileId, getId) {
    const prefix = this.chapterKeyPrefix(fileId)
    const sortOrder = this.storage.getItem(this.chapterOrderKey(fileId))
    const keys = this.getStorageKeys().filter(key => key.startsWith(prefix))
    const chapters = keys.map(key => this.storage.getItem(key)).sort((chap1, chap2) => {
      return sortOrder.indexOf(getId(chap1)) - sortOrder.indexOf(getId(chap2))
    })

    return chapters
  }

  getAllTopics (fileId, getId) {
    const prefix = this.topicKeyPrefix(fileId)
    const sortOrder = this.storage.getItem(this.topicOrderKey(fileId))
    const keys = this.getStorageKeys().filter(key => key.startsWith(prefix))
    const topics = keys.map(key => this.storage.getItem(key)).sort((topic1, topic2) => {
      return sortOrder.indexOf(getId(topic1)) - sortOrder.indexOf(getId(topic2))
    })

    return topics
  }

  getChapter (fileId, chapterId) {
    const key = this.getChapterKey(fileId, chapterId)
    return JSON.parse(this.storage.getItem(key))
  }

  getChapterKey (fileId, chapterId) {
    return `${this.chapterKeyPrefix(fileId)}${chapterId}`
  }

  getTopic (fileId, topicId) {
    const key = this.getTopicKey(fileId, topicId)
    return JSON.parse(this.storage.getItem(key))
  }

  getTopicKey (fileId, topicId) {
    return `${this.topicKeyPrefix(fileId)}${topicId}`
  }

  updateChapter (fileId, chapterId, chapter) {
    const key = this.getChapterKey(fileId, chapterId)
    this.storage.setItem(key, JSON.stringify(chapter))
  }

  updateTopic (fileId, topicId, topic) {
    const key = this.getTopicKey(fileId, topicId)
    this.storage.setItem(key, JSON.stringify(topic))
  }
}

const ChapterStorageSingleton = new ChapterStorage()

export default ChapterStorageSingleton

import { ADD_CHAPTER, ADD_TOPIC, ADD_TOPIC_TO_CHAPTER, ARCHIVE_CHAPTER, ARCHIVE_TOPIC,
  DELETE_CHAPTER, DELETE_TOPIC,
  REARRANGE_CHAPTERS, REARRANGE_TOPICS,
  RESTORE_CHAPTER, RESTORE_TOPIC, UPDATE_CHAPTER, UPDATE_CHAPTER_CONTENT,
  UPDATE_TOPIC, UPDATE_TOPIC_CONTENT, UPDATE_TOPIC_TEXT_CONTENT } from './chapters.store'

const mutations = {
  deleteChapter: [DELETE_CHAPTER],
  deleteTopic: [DELETE_TOPIC],
  rearrangeChapter: [REARRANGE_CHAPTERS],
  rearrangeTopic: [REARRANGE_TOPICS],
  updateChapter: [ADD_CHAPTER, ADD_TOPIC_TO_CHAPTER, ARCHIVE_CHAPTER,
    RESTORE_CHAPTER,
    UPDATE_CHAPTER, UPDATE_CHAPTER_CONTENT, UPDATE_TOPIC_CONTENT, UPDATE_TOPIC_TEXT_CONTENT],
  updateTopic: [ADD_TOPIC, ARCHIVE_TOPIC,
    RESTORE_TOPIC,
    UPDATE_TOPIC]
}

export const chapterAutosaverPlugin = store => {
  store.subscribe((mutation, state) => {
    const { type, payload } = mutation
    const fileId = state.file.currentFile.id

    if (mutations.deleteChapter.includes(type)) {
      ChapterStorageSingleton.deleteChapter(fileId, payload.chapter.title)
      return
    }

    if (mutations.deleteTopic.includes(type)) {
      ChapterStorageSingleton.deleteTopic(fileId, payload.topic.title)
      return
    }

    if (mutations.rearrangeChapter.includes(type)) {
      ChapterStorageSingleton.arrangeChapters(fileId, payload.chapters.map(chapter => chapter.title))
      return
    }

    if (mutations.rearrangeTopic.includes(type)) {
      ChapterStorageSingleton.arrangeTopics(fileId, payload.topics.map(topic => topic.title))
      return
    }

    if (mutations.updateChapter.includes(type)) {
      ChapterStorageSingleton.updateChapter(fileId, payload.chapter.title, payload.chapter)
      return
    }

    if (mutations.updateTopic.includes(type)) {
      ChapterStorageSingleton.updateTopic(fileId, payload.topic.title, payload.topic)
      return
    }
  })
}