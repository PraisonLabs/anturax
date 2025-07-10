export interface AnturaxSystem {
  id: string
  name: string
  status: SystemStatus
  lastUpdated: Date
  metrics: SystemMetrics
}

export enum SystemStatus {
  ONLINE = 'ONLINE',
  OFFLINE = 'OFFLINE',
  MAINTENANCE = 'MAINTENANCE',
  ERROR = 'ERROR'
}

export interface SystemMetrics {
  cpuUsage: number
  memoryUsage: number
  networkLatency: number
  uptime: number
}

export interface User {
  id: string
  username: string
  email: string
  role: UserRole
  avatar?: string
  createdAt: Date
  lastLogin?: Date
  preferences: UserPreferences
}

export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
  VISITOR = 'VISITOR'
}

export interface UserPreferences {
  theme: 'dark' | 'cyberpunk' | 'neon'
  audioEnabled: boolean
  animationsEnabled: boolean
  language: string
  notifications: NotificationSettings
}

export interface NotificationSettings {
  email: boolean
  push: boolean
  system: boolean
}

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  error?: string
  timestamp: Date
}

export interface AnturaxArtifact {
  id: string
  name: string
  description: string
  type: ArtifactType
  rarity: ArtifactRarity
  powerLevel: number
  attributes: ArtifactAttribute[]
  discovered: Date
  owner?: string
}

export enum ArtifactType {
  WEAPON = 'WEAPON',
  ARMOR = 'ARMOR',
  ACCESSORY = 'ACCESSORY',
  CONSUMABLE = 'CONSUMABLE',
  RELIC = 'RELIC'
}

export enum ArtifactRarity {
  COMMON = 'COMMON',
  RARE = 'RARE',
  EPIC = 'EPIC',
  LEGENDARY = 'LEGENDARY',
  MYTHIC = 'MYTHIC'
}

export interface ArtifactAttribute {
  name: string
  value: number | string
  type: 'stat' | 'effect' | 'enhancement'
}

export interface WorldLocation {
  id: string
  name: string
  coordinates: Vector3
  description: string
  type: LocationType
  discovered: boolean
  inhabitants?: string[]
  artifacts?: string[]
}

export enum LocationType {
  CITY = 'CITY',
  STATION = 'STATION',
  PLANET = 'PLANET',
  NEBULA = 'NEBULA',
  VOID = 'VOID'
}

export interface Vector3 {
  x: number
  y: number
  z: number
}

export interface GameEvent {
  id: string
  type: EventType
  title: string
  description: string
  startDate: Date
  endDate?: Date
  rewards?: AnturaxArtifact[]
  participants: string[]
}

export enum EventType {
  SYSTEM_ALERT = 'SYSTEM_ALERT',
  USER_ACTION = 'USER_ACTION',
  DISCOVERY = 'DISCOVERY',
  COMBAT = 'COMBAT',
  EXPLORATION = 'EXPLORATION'
}

export interface MousePosition {
  x: number
  y: number
}

export interface SceneProps {
  mousePosition: MousePosition
  theme?: string
  isActive?: boolean
}

export interface LoadingState {
  isLoading: boolean
  progress: number
  message: string
}

export interface AnturaxConfig {
  apiUrl: string
  version: string
  features: {
    webGL: boolean
    audio: boolean
    analytics: boolean
  }
  limits: {
    maxUsers: number
    maxArtifacts: number
    sessionTimeout: number
  }
}