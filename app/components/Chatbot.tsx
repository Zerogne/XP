"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Minimize2, Send, User, Bot } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: `bot-${Date.now()}-welcome`,
      text: 'Сайн байна уу! Xperience-д тавтай морил! Таны асуултыг сонсохдоо бэлэн байна. Та юу хийх хүсэлтэй байна вэ?',
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { t, language } = useLanguage()

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const toggleChat = () => {
    if (isMinimized) {
      setIsMinimized(false)
      setIsOpen(true)
    } else {
      setIsOpen(!isOpen)
    }
  }

  const minimizeChat = () => {
    setIsMinimized(true)
    setIsOpen(false)
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate bot response based on ManyChat flow
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue.toLowerCase())
      const botMessage: Message = {
        id: `bot-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000)
  }

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()

    // Website development - Show project section
    if (input.includes('сайт') || input.includes('website') || input.includes('вебсайт')) {
      return 'Манай хийсэн төслүүдийг харна уу! 🚀\n\nБид юу хийдэг вэ?\n\n🌐 Вэбсайт хөгжүүлэлт\n• E-commerce сайт (онлайн дэлгүүр)\n• Корпоратив сайт (компанийн танилцуулга)\n• Блог/Мэдээний сайт\n• Портфолио сайт\n• Landing page\n\n🎨 UI/UX дизайн\n• Хэрэглэгчийн интерфейс дизайн\n• Хэрэглэгчийн туршлага\n• Responsive дизайн\n\n🔍 SEO үйлчилгээ\n• Хайлтын системд оновчлол\n• Вебсайт аудит\n• Контент стратеги\n\nМанай төслүүдийг харахын тулд "Our Work" хэсэг рүү очно уу!'
    }

    // Services - Direct to offerings
    else if (input.includes('үйлчилгээ') || input.includes('service') || input.includes('санал') || input.includes('боломж')) {
      return 'Манай үйлчилгээнүүдийн дэлгэрэнгүй мэдээллийг /offers хуудаснаас харна уу! 🛠️\n\nТэнд та манай бүх багц, үнэ, болон нэмэлт үйлчилгээнүүдийг олж болно.'
    }

    // Process
    else if (input.includes('хэрхэн') || input.includes('how') || input.includes('process') || input.includes('яаж') || input.includes('алхам')) {
      return 'Манай ажлын процесс: 📋\n\n1️⃣ Хүсэлт хүлээн авах\n2️⃣ Төслийн тодорхойлолт\n3️⃣ Загвар санал болгох\n4️⃣ Хөгжүүлэлт\n5️⃣ Тест хийх\n6️⃣ Хүлээлгэх\n\nТаны хүсэлтийг хүлээн авсны дараа дэлгэрэнгүй тайлбарлана!'
    }

    // Contact - Form first, then contact + social media (includes contract/agreement)
    else if (input.includes('холбоо') || input.includes('contact') || input.includes('дугаар') || input.includes('утас') || input.includes('холбогдох') || input.includes('гэрээ') || input.includes('contract') || input.includes('хэлэлцээр') || input.includes('санал') || input.includes('хүсэлт') || input.includes('хөгжүүлэх') || input.includes('хийх') || input.includes('захиалга')) {
      return 'Бидэнтэй холбогдохын тулд эхлээд доорх форм-ыг бөглөнө үү: 📝\n\nhttps://docs.google.com/forms/d/e/1FAIpQLScw_5Ew3V4ja_W2OksD1WHaQd-pnpMYq97PJBvhCku8v4IkpA/viewform?usp=header\n\nФорм бөглөсний дараа танд холбогдоно уу!\n\n📱 Danny: +976 80296007\n📧 И-мэйл: xperience.proydrs@gmail.com'
    }

    // Social media
    else if (input.includes('сошиал') || input.includes('social') || input.includes('facebook') || input.includes('instagram')) {
      return 'Манай сошиал медиа: 📱\n\n📘 Facebook: Xperience\n📷 Instagram: @xperience.proydrs\n\nМөн манай вэбсайт дээрх хөгжүүлэлтийн жишээнүүдийг харна уу!'
    }

    // Time/Duration
    else if (input.includes('хугацаа') || input.includes('time') || input.includes('хэдэн хоног') || input.includes('хэдэн долоо хоног')) {
      return 'Төслийн хугацаа: ⏰\n\n• Энгийн сайт: 1-2 долоо хоног\n• Дунд зэргийн сайт: 2-3 долоо хоног\n• Төвөгтэй сайт: 3-4 долоо хоног\n\nЯаралтай хийх бол +300,000₮ нэмэгдэнэ.'
    }

    // Default response - Updated with services and without apology
    else {
      return 'Та дараах зүйлсээс бичин асууж болно:\n• Сайт хийх\n• Үйлчилгээ\n• Холбогдох\n\nДэлгэрэнгүй мэдээллийг /offers хуудаснаас харна уу!\n\nЮу хийх хүсэлтэй байна вэ?'
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence mode="wait">
        {/* Chat Widget Container */}
        {isOpen && (
          <motion.div
            key="chat-widget"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 w-96 h-[600px] overflow-hidden mb-20"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Xperience</h3>
                  <p className="text-white/80 text-sm">Online Support</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={minimizeChat}
                  className="p-1 rounded-full hover:bg-white/20 transition-colors"
                >
                  <Minimize2 className="w-4 h-4 text-white" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-full hover:bg-white/20 transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 flex flex-col h-[520px]">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start gap-3 max-w-[85%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${message.sender === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                        }`}>
                        {message.sender === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                      </div>
                      <div className={`px-5 py-3 rounded-2xl ${message.sender === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
                        }`}>
                        <div className="text-sm whitespace-pre-line leading-relaxed">
                          {message.sender === 'bot' ? (
                            <div dangerouslySetInnerHTML={{
                              __html: message.text
                                .replace(/\n/g, '<br>')
                                .replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300">$1</a>')
                            }} />
                          ) : (
                            message.text
                          )}
                        </div>
                        <p className={`text-xs mt-2 ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'
                          }`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                        <Bot className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                      </div>
                      <div className="px-5 py-3 rounded-2xl bg-gray-100 dark:bg-gray-800">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="border-t border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={language === 'mn' ? 'Мессеж бичнэ үү...' : 'Type a message...'}
                    className="flex-1 px-5 py-3 border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim()}
                    className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Chat Button */}
        <motion.button
          key="chat-button"
          onClick={toggleChat}
          className={`bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 ${isMinimized ? 'animate-pulse' : ''
            }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ position: 'fixed', bottom: '24px', right: '24px' }}
        >
          {isMinimized ? (
            <MessageCircle className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </motion.button>
      </AnimatePresence>
    </div>
  )
}
