import { Consumption } from "../entities/consumption.entity";
import { Sensor } from "../entities/sensor.entity";

export class sensorData {

    dataUser: Sensor[] = [
        {
            id: 1,
            device: "Televisão sala",
            KWh: 12,
            value: 5.99,
            status: true,
            consumption: [
                {
                    date: "19/10/2021",
                    kw: 36,
                    value: 0.45
                },
                {
                    date: "20/10/2021",
                    kw: 43,
                    value: 0.56
                },
                {
                    date: "21/10/2021",
                    kw: 29,
                    value: 0.37
                },
                {
                    date: "22/10/2021",
                    kw: 13,
                    value: 0.11
                },
                {
                    date: "23/10/2021",
                    kw: 58,
                    value: 0.87
                },
                {
                    date: "24/10/2021",
                    kw: 239,
                    value: 1.47
                },
                {
                    date: "25/10/2021",
                    kw: 206,
                    value: 1.28
                },
                {
                    date: "26/10/2021",
                    kw: 62,
                    value: 0.88
                },
            ],
        },
        {
            id: 2,
            device: "Computador",
            KWh: 29,
            value: 9.78,
            status: true,
            consumption: [
                {
                    date: "19/10/2021",
                    kw: 58,
                    value: 0.87
                },
                {
                    date: "20/10/2021",
                    kw: 66,
                    value: 0.98
                },
                {
                    date: "21/10/2021",
                    kw: 234,
                    value: 1.37
                },
                {
                    date: "22/10/2021",
                    kw: 197,
                    value: 1.11
                },
                {
                    date: "23/10/2021",
                    kw: 57,
                    value: 0.77
                },
                {
                    date: "24/10/2021",
                    kw: 307,
                    value: 2.47
                },
                {
                    date: "25/10/2021",
                    kw: 234,
                    value: 1.28
                },
                {
                    date: "26/10/2021",
                    kw: 57,
                    value: 0.93
                },
            ],
        },
        {
            id: 3,
            device: "Cafeteira",
            KWh: 0,
            value: 0.9,
            status: false,
            consumption: [
                {
                    date: "19/10/2021",
                    kw: 59,
                    value: 0.12
                },
                {
                    date: "20/10/2021",
                    kw: 0,
                    value: 0
                },
                {
                    date: "21/10/2021",
                    kw: 0,
                    value: 0
                },
                {
                    date: "22/10/2021",
                    kw: 53,
                    value: 0.11
                },
                {
                    date: "23/10/2021",
                    kw: 57,
                    value: 0.12
                },
                {
                    date: "24/10/2021",
                    kw: 0,
                    value: 0
                },
                {
                    date: "25/10/2021",
                    kw: 77,
                    value: 0.44
                },
                {
                    date: "26/10/2021",
                    kw: 55,
                    value: 0.11
                },
            ],
        },
        {
            id: 4,
            device: "Geladeira",
            KWh: 1.12,
            value: 3.09,
            status: true,
            consumption: [
                {
                    date: "19/10/2021",
                    kw: 73,
                    value: 0.38
                },
                {
                    date: "20/10/2021",
                    kw: 72,
                    value: 0.41
                },
                {
                    date: "21/10/2021",
                    kw: 72,
                    value: 0.33
                },
                {
                    date: "22/10/2021",
                    kw: 73,
                    value: 0.36
                },
                {
                    date: "23/10/2021",
                    kw: 87,
                    value: 0.43
                },
                {
                    date: "24/10/2021",
                    kw: 72,
                    value: 0.36
                },
                {
                    date: "25/10/2021",
                    kw: 84,
                    value: 0.44
                },
                {
                    date: "26/10/2021",
                    kw: 79,
                    value: 0.38
                },
            ],
        },
    ]
}