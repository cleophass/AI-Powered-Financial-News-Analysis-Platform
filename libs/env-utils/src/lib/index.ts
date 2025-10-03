import { isFQDN, isIP } from '@straufi/utilities';
import { EnvError, makeValidator } from 'envalid';

interface NumberValidatorOptions {
  min?: number;
  max?: number;
  integer?: boolean;
}

export const urlArray = makeValidator<URL[]>((input: string) => {
  try {
    return input
      .split(',')
      .filter(Boolean)
      .map((url) => new URL(url));
  } catch {
    throw new EnvError(`Invalid urls: "${input}"`);
  }
});

export const date = makeValidator<Date>((input: string) => {
  const dateInput = new Date(input);

  if (Number.isNaN(dateInput.getTime())) {
    throw new EnvError(`Invalid date: "${input}"`);
  }

  return dateInput;
});

export const address = makeValidator<string>((input: string) => {
  const [ip, port] = input.split(':');

  if (!isFQDN(ip) && !isIP(ip)) {
    throw new EnvError(`Invalid address: "${ip}"`);
  }

  const portNumber = Number(port);
  if (Number.isNaN(portNumber) || portNumber <= 0 || portNumber > 65_535) {
    throw new EnvError(`Invalid port: "${port}"`);
  }

  return input;
});

export const number = (options: NumberValidatorOptions) =>
  makeValidator<number>((input: string) => {
    const numberValue = Number(input);

    if (Number.isNaN(numberValue)) {
      throw new EnvError(`Invalid number: "${input}"`);
    }

    if (options.integer && !Number.isInteger(numberValue)) {
      throw new EnvError(`Invalid integer: "${input}"`);
    }

    if (options.min && numberValue < options.min) {
      throw new EnvError(`Number is smaller than min: "${input}"`);
    }

    if (options.max && numberValue > options.max) {
      throw new EnvError(`Number is bigger than max: "${input}"`);
    }

    return numberValue;
  });
