import { ref } from 'vue';
import { defineStore } from 'pinia';

const useMessage = defineStore('message', () => {
  const message = ref('');

  function setMessage(value: string): void {
    message.value = value;
    localStorage.setItem('message', JSON.stringify(value));
  }

  return { message, setMessage };
});

export default useMessage;
