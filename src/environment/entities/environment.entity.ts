import { Sensor } from "src/sensor/entities/sensor.entity";

export class Environment {
    id: number;
    room: string;
    value: number;
    sensorList: Array<Sensor>;
}
