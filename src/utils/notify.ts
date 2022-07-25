import { Message } from 'element-ui';

export const successMessage = (message: string) => {
  Message({
    type: 'success',
    message,
    duration: 5000,
  });
};
