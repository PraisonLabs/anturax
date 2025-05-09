export const ANTURAX_CONFIG = {
  APP_NAME: 'Anturax',
  VERSION: '1.0.0',
  API_VERSION: 'v1',
  
  COLORS: {
    PRIMARY_RED: '#ff0040',
    PRIMARY_CYAN: '#00ffff',
    DARK_BG: '#0a0a0a',
    GRID_COLOR: 'rgba(255, 0, 64, 0.1)',
    TEXT_PRIMARY: '#ffffff',
    TEXT_SECONDARY: '#cccccc',
  },
  
  TIMING: {
    LOADING_DURATION: 2000,
    ANIMATION_DURATION: 300,
    GRID_PULSE_DURATION: 4000,
  },
  
  LIMITS: {
    MAX_PARTICLES: 5000,
    MAX_USERS_PER_SESSION: 100,
    MAX_ARTIFACTS: 1000,
    SESSION_TIMEOUT: 30 * 60 * 1000, // 30 minutes
  }
} as const

export const SYSTEM_MESSAGES = {
  LOADING: 'Initializing Anturax Systems...',
  CONNECTING: 'Establishing quantum link...',
  READY: 'System ready. Welcome to Anturax.',
  ERROR: 'System malfunction detected.',
  MAINTENANCE: 'System undergoing temporal realignment.',
} as const

export const LOCATIONS = {
  SIRIUS: {
    name: 'Sirius',
    era: 'Convergence Era',
    coordinates: { x: 0, y: 0, z: 0 }
  },
  VIREON: {
    name: 'Vireon',
    era: '22nd Century',
    coordinates: { x: 100, y: 50, z: -30 }
  },
  V889: {
    name: 'V889',
    era: 'Deep Quadrant',
    coordinates: { x: -75, y: 120, z: 200 }
  },
  V557: {
    name: 'V557',
    era: 'Deep Quadrant',
    coordinates: { x: 150, y: -80, z: 90 }
  }
} as const

export const ARTIFACTS = {
  BLOOD_ECLIPSE_HALO: {
    name: 'Blood Eclipse Halo',
    description: 'A crown forged in the heart of a dying sun',
    powerLevel: 100
  },
  SCARLET_ALLOY_EXOSUIT: {
    name: 'Scarlet Alloy Exosuit',
    description: 'Nanofiber armor with encoded cosmic relics',
    powerLevel: 100
  },
  CRIMSON_CORE_DRIVE: {
    name: 'Crimson Core Drive',
    description: 'A volatile engine of rebirth and rebellion',
    powerLevel: 100
  },
  INFERNO_CIRCUITRY: {
    name: 'Inferno Circuitry',
    description: 'A molten neural mesh that whispers futures',
    powerLevel: 100
  }
} as const

export const API_ENDPOINTS = {
  HEALTH: '/api/health',
  SYSTEMS: '/api/systems',
  USERS: '/api/users',
  ARTIFACTS: '/api/artifacts',
  EVENTS: '/api/events',
  AUTH: '/api/auth'
} as const

export const ERROR_CODES = {
  SYSTEM_OFFLINE: 'SYS_001',
  AUTHENTICATION_FAILED: 'AUTH_001',
  INSUFFICIENT_PERMISSIONS: 'AUTH_002',
  RESOURCE_NOT_FOUND: 'RES_001',
  RATE_LIMIT_EXCEEDED: 'RATE_001',
  INTERNAL_ERROR: 'INT_001'
} as const