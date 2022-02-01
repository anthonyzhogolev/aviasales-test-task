// сам билет, включает в себя остальные сущности
export interface Ticket {
  id: string;
  // Цена в рублях
  price: number;
  // идентификатор компании которая осуществляет перевозку
  companyId: string;
  // Массив идентификаторов перелётов
  segments: string[];
}

// Список кодов городов. Мы в каждом билете будем лететь с MOW в EKT
export type CityCodes = 'MOW' | 'HKT' | 'HKG' | 'JNB' | 'PTB' | 'ARH' | 'TRN' | 'KRS' | 'SRT' | 'LOS' | 'EKV' | 'EKT';

// список перелётов
export interface Segment {
  id: string;
  // Код города откуда вылет
  origin: CityCodes | string;
  // Код города куда летим
  destination: CityCodes| string;
  // Дата и время вылета в unix времени
  dateStart: number;
  // Дата и время прибытия в unix времени
  dateEnd: number;
  // Массив кодов городов с пересадками
  stops: CityCodes[] | string[];
  // Длительность полета в миллисекундах
  duration: number;
}

// { id: string; dateStart: number; dateEnd: number; origin: string; destination: string; stops: string[]; duration: number; }

// компания
export interface Company {
  id: string;
  // Название компании
  name: string;
  // Имя логотипа
  // Т.к. картинки пока храниться будут у Вас локально - имя и путь к картинке можете замапить на те что будут у вас
  logo: string;
}
