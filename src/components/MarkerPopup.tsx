'use client'
// import socket from '@/services/socket'
import Leaflet from 'leaflet'
// import { useEffect, useState } from 'react'
import { Popup, Marker } from 'react-leaflet'

const mapPinIcon = Leaflet.icon({
  iconUrl: '/icon.svg',
  iconSize: [20, 20],
  iconAnchor: [10, 10],
  popupAnchor: [-2, -2],
})

// type Data = {
//   name: string
//   location: {
//     lat: number
//     lng: number
//     address: string
//   }
//   battery_status: number
// }

export default function MarkerPopup() {
  // const [data, setData] = useState<Data | null>(null)
  // const imei = 356132115371941

  // useEffect(() => {
  //   socket.on('connect', () => {
  //     console.log('Conectado ao servidor Socket.IO')
  //   })

  //   socket.on('message', async (message) => {
  //     console.log(message)
  //     const response = await fetch(`/api/scalefusion/${message}`)
  //     const data = await response.json()

  //     setData(data.dataDevice)
  //   })

  //   return () => {
  //     socket.disconnect()
  //   }
  // }, [])

  const data = [
    {
      id: 1,
      name: 'Anápolis',
      location: {
        lat: -16.3287,
        lng: -48.9534,
      },
      inCharge: 'Denis',
      cities: 29,
      meterReadings: 254598,
      regions: [
        {
          id: 1,
          name: 'Inhumas',
          collaborators: 15,
        },
        {
          id: 2,
          name: 'Anápolis',
          collaborators: 63,
          inCharge: 'Julianne',
        },
      ],
    },
    {
      id: 2,
      name: 'Formosa',
      location: {
        lat: -15.537,
        lng: -47.3357,
      },
      inCharge: 'Roberto',
      cities: 15,
      meterReadings: 157325,
      regions: [
        {
          id: 3,
          name: 'Campos Belos',
          collaborators: 17,
        },
        {
          id: 4,
          name: 'Formosa',
          collaborators: 33,
          inCharge: 'Julianne',
        },
      ],
    },
    {
      id: 3,
      name: 'Goianésia',
      location: {
        lat: -15.3259,
        lng: -49.1173,
      },
      inCharge: 'Leonardo',
      cities: 23,
      meterReadings: 214823,
      regions: [
        {
          id: 5,
          name: 'Ceres',
          collaborators: 43,
        },
        {
          id: 6,
          name: 'Porangatu',
          collaborators: 30,
        },
        {
          id: 7,
          name: 'Formosa',
          collaborators: 33,
          inCharge: 'Julianne',
        },
      ],
    },
    {
      id: 4,
      name: 'Itaberaí',
      location: {
        lat: -16.0084,
        lng: -49.7962,
      },
      inCharge: 'Cleiton',
      cities: 33,
      meterReadings: 232584,
      regions: [
        {
          id: 8,
          name: 'Goias',
          collaborators: 26,
        },
        {
          id: 9,
          name: 'Ipora',
          collaborators: 19,
        },
        {
          id: 10,
          name: 'Palmeiras',
          collaborators: 12,
        },
        {
          id: 11,
          name: 'São Luiz dos Montes Belos',
          collaborators: 14,
          inCharge: 'Julianne',
        },
      ],
    },
    {
      id: 5,
      name: 'Santa Helena de Goiás',
      location: {
        lat: -17.823,
        lng: -50.5883,
      },
      inCharge: 'Cássio',
      cities: 22,
      meterReadings: 177382,
      regions: [
        {
          id: 12,
          name: 'Itumbiara',
          collaborators: 25,
        },
        {
          id: 13,
          name: 'Morrinhos',
          collaborators: 14,
        },
        {
          id: 14,
          name: 'Ouvidor',
          collaborators: 16,
          inCharge: 'Julianne',
        },
      ],
    },
    {
      id: 6,
      name: 'Bom Jesus de Goiás',
      location: {
        lat: -18.203,
        lng: -49.7341,
      },
      inCharge: 'Leandro',
      cities: 26,
      meterReadings: 103204,
      regions: [
        {
          id: 15,
          name: 'Jatai',
          collaborators: 10,
        },
        {
          id: 16,
          name: 'Rio Verde',
          collaborators: 6,
        },
        {
          id: 17,
          name: 'Santa Helena',
          collaborators: 20,
          inCharge: 'Julianne',
        },
      ],
    },
    {
      id: 7,
      name: 'Goiânia',
      location: {
        lat: -16.6799,
        lng: -49.255,
      },
      inCharge: 'Edílson',
      cities: 10,
      meterReadings: 396674,
      regions: [
        {
          id: 18,
          name: 'Luziânia',
          collaborators: 115,
          inCharge: 'Julianne',
        },
      ],
    },
  ]

  return (
    <>
      {data.map((base) => (
        <Marker
          key={base.id}
          position={[base.location.lat, base.location.lng]}
          icon={mapPinIcon}
        >
          <Popup closeButton={false}>
            <div className="flex flex-col gap-2">
              <h1 className="text-zinc-900 font-bold text-lg text-center">
                {base.name}
              </h1>

              <div className="flex gap-1">
                <span className="font-bold">Encarregado:</span>
                <span>{base.inCharge}</span>
              </div>

              <div className="flex gap-1">
                <span className="font-bold">N° Cidades:</span>
                <span>{base.cities}</span>
              </div>

              <div className="flex gap-1">
                <span className="font-bold">N° Regionais:</span>
                <span>{base.regions.length}</span>
              </div>

              <div className="flex gap-1">
                <span className="font-bold">N° Leituras:</span>
                <span>{base.meterReadings}</span>
              </div>

              <div className="flex flex-col">
                {base.regions.map((item) => (
                  <div className="mb-2" key={item.id}>
                    <div className="flex gap-1">
                      <span className="font-bold">Regional:</span>
                      <span>{item.name}</span>
                    </div>
                    <div className="flex gap-1">
                      <span className="font-bold">N° Colaboradores:</span>
                      <span>{item.collaborators}</span>
                    </div>
                  </div>
                ))}
              </div>
              {/* <span className="font-semibold">{data?.location.address}</span>
            <span>
              <strong className="font-semibold">Nome:</strong> {data?.name}
            </span>
            <span className="flex gap-8">
              <div>
                <strong className="font-semibold">Bateria:</strong>{' '}
                {`${data.battery_status}%`}
              </div>
              <div>
                <strong className="font-semibold">
                  Horário da ocorrência:
                </strong>{' '}
                {'16:40'}
              </div>
            </span>
            <span>
              <strong className="font-semibold">Mensagem:</strong>{' '}
              {'Estou presa nessa casa, preciso de ajuda.'}
            </span> */}
            </div>
          </Popup>
        </Marker>
      ))}
    </>
  )
}
