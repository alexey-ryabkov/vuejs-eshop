import { type ProductСharacteristic } from "@entities/product";

const characteristicIcons: Record<string, string> = {
  "Для модели": "appropriate",
  Материал: "material",
  Процессор: "cpu",
  "Объем встроенной памяти": "builtin-memory",
  Аккумулятор: "battery-capacity",
  Питание: "power",
  "Материал корпуса": "material",
  Вес: "weight",
  Диагональ: "screen-size",
  Разрешение: "screen",
  "Кол-во ядер": "cpu-cores",
  "Объем оперативной памяти": "memory",
  Циферблат: "watch",
  "Время работы": "schedule",
  "Время работы от аккумулятора в кейсет": "schedule",
  "Система активного шумоподавления": "noise-cancel",
  Конструкция: "construction",
  "Беспроводная зарядка": "charging",
  "Передняя камера": "camera-front",
  "Задняя камера": "camera-main",
};

const DEF_CHARACTERISTIC_ICON = "wrench";
export const processCharacteristic = ({
  characteristic: name,
  unit_type,
  value,
}: ProductСharacteristic) => ({
  name,
  value: `${value} ${unit_type != "значение" ? unit_type : ""}`.trim(),
  icon: `prop-${characteristicIcons?.[name] || DEF_CHARACTERISTIC_ICON}`,
});
