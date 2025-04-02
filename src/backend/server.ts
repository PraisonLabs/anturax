import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'
import { AnturaxSystem, SystemStatus, ApiResponse } from '../common/types'
import { ANTURAX_CONFIG, API_ENDPOINTS, SYSTEM_MESSAGES } from '../common/constants'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.static('public'))

const anturaxSystems: AnturaxSystem[] = [
  {
    id: 'core-1',
    name: 'CORE SYSTEMS',
    status: SystemStatus.ONLINE,
    lastUpdated: new Date(),
    metrics: {
      cpuUsage: 45,
      memoryUsage: 62,
      networkLatency: 12,
      uptime: 99.98
    }
  },
  {
    id: 'neural-1',
    name: 'NEURAL NET',
    status: SystemStatus.ONLINE,
    lastUpdated: new Date(),
    metrics: {
      cpuUsage: 78,
      memoryUsage: 84,
      networkLatency: 8,
      uptime: 99.95
    }
  },
  {
    id: 'quantum-1',
    name: 'QUANTUM DRIVE',
    status: SystemStatus.ONLINE,
    lastUpdated: new Date(),
    metrics: {
      cpuUsage: 23,
      memoryUsage: 34,
      networkLatency: 5,
      uptime: 100
    }
  },
  {
    id: 'temporal-1',
    name: 'TEMPORAL FLUX',
    status: SystemStatus.ONLINE,
    lastUpdated: new Date(),
    metrics: {
      cpuUsage: 67,
      memoryUsage: 78,
      networkLatency: 15,
      uptime: 99.87
    }
  }
]

app.get(API_ENDPOINTS.HEALTH, (req, res) => {
  const response: ApiResponse = {
    success: true,
    data: {
      status: 'healthy',
      version: ANTURAX_CONFIG.VERSION,
      timestamp: new Date(),
      message: SYSTEM_MESSAGES.READY
    },
    timestamp: new Date()
  }
  
  res.json(response)
})

app.get(API_ENDPOINTS.SYSTEMS, (req, res) => {
  const response: ApiResponse<AnturaxSystem[]> = {
    success: true,
    data: anturaxSystems,
    timestamp: new Date()
  }
  
  res.json(response)
})

app.get(`${API_ENDPOINTS.SYSTEMS}/:id`, (req, res) => {
  const { id } = req.params
  const system = anturaxSystems.find(s => s.id === id)
  
  if (!system) {
    const response: ApiResponse = {
      success: false,
      error: 'System not found',
      timestamp: new Date()
    }
    return res.status(404).json(response)
  }
  
  const response: ApiResponse<AnturaxSystem> = {
    success: true,
    data: system,
    timestamp: new Date()
  }
  
  res.json(response)
})

app.post(`${API_ENDPOINTS.SYSTEMS}/:id/status`, (req, res) => {
  const { id } = req.params
  const { status } = req.body
  
  const system = anturaxSystems.find(s => s.id === id)
  
  if (!system) {
    const response: ApiResponse = {
      success: false,
      error: 'System not found',
      timestamp: new Date()
    }
    return res.status(404).json(response)
  }
  
  if (!Object.values(SystemStatus).includes(status)) {
    const response: ApiResponse = {
      success: false,
      error: 'Invalid status',
      timestamp: new Date()
    }
    return res.status(400).json(response)
  }
  
  system.status = status
  system.lastUpdated = new Date()
  
  const response: ApiResponse<AnturaxSystem> = {
    success: true,
    data: system,
    message: `System ${system.name} status updated to ${status}`,
    timestamp: new Date()
  }
  
  res.json(response)
})

app.get('/api/stats', (req, res) => {
  const totalSystems = anturaxSystems.length
  const onlineSystems = anturaxSystems.filter(s => s.status === SystemStatus.ONLINE).length
  const avgUptime = anturaxSystems.reduce((acc, s) => acc + s.metrics.uptime, 0) / totalSystems
  
  const response: ApiResponse = {
    success: true,
    data: {
      totalSystems,
      onlineSystems,
      offlineSystems: totalSystems - onlineSystems,
      systemHealth: (onlineSystems / totalSystems) * 100,
      averageUptime: avgUptime,
      lastUpdate: new Date()
    },
    timestamp: new Date()
  }
  
  res.json(response)
})

app.get('/api/artifacts', (req, res) => {
  const artifacts = [
    {
      id: 'artifact-1',
      name: 'Blood Eclipse Halo',
      description: 'A crown forged in the heart of a dying sun',
      type: 'RELIC',
      rarity: 'LEGENDARY',
      powerLevel: 100,
      attributes: [
        { name: 'Energy Output', value: 9500, type: 'stat' },
        { name: 'Temporal Resonance', value: 'Extreme', type: 'effect' }
      ],
      discovered: new Date('2024-07-15'),
      owner: null
    },
    {
      id: 'artifact-2',
      name: 'Scarlet Alloy Exosuit',
      description: 'Nanofiber armor with encoded cosmic relics',
      type: 'ARMOR',
      rarity: 'LEGENDARY',
      powerLevel: 100,
      attributes: [
        { name: 'Defense Rating', value: 8900, type: 'stat' },
        { name: 'Adaptive Shield', value: 'Active', type: 'enhancement' }
      ],
      discovered: new Date('2024-08-20'),
      owner: null
    }
  ]
  
  const response: ApiResponse = {
    success: true,
    data: artifacts,
    timestamp: new Date()
  }
  
  res.json(response)
})

app.use((req, res) => {
  const response: ApiResponse = {
    success: false,
    error: 'Endpoint not found',
    timestamp: new Date()
  }
  res.status(404).json(response)
})

app.use((error: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Server error:', error)
  
  const response: ApiResponse = {
    success: false,
    error: 'Internal server error',
    timestamp: new Date()
  }
  
  res.status(500).json(response)
})

const server = app.listen(PORT, () => {
  console.log(`
╔══════════════════════════════════════════════════════════════╗
║                    🛸 ANTURAX SERVER 🛸                      ║
╠══════════════════════════════════════════════════════════════╣
║  Server running on port ${PORT}                               ║
║  Environment: ${process.env.NODE_ENV || 'development'}        ║
║  Version: ${ANTURAX_CONFIG.VERSION}                           ║
║  Status: ${SYSTEM_MESSAGES.READY}                            ║
╚══════════════════════════════════════════════════════════════╝
  `)
})

process.on('SIGINT', () => {
  console.log('\n🛸 Shutting down Anturax server...')
  server.close(() => {
    console.log('Server closed')
    process.exit(0)
  })
})

export default app