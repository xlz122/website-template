import type { DirectiveBinding } from 'vue';
import { getImageUrl } from '@/utils/utils';

const loadImage = (el: HTMLImageElement, binding: DirectiveBinding<string>) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      // 图片类型判断
      if (/^(https?:)?\/\//.test(binding.value)) {
        el.src = binding.value;
      } else {
        el.src = getImageUrl(binding.value) ?? '';
      }

      el.onload = () => {
        el.classList.add('loaded');
      };
      observer.unobserve(el);
    });
  });

  observer.observe(el);
};

export default {
  beforeMount(el: HTMLImageElement) {
    el.setAttribute('v-lazyload', '');
  },
  mounted(el: HTMLImageElement, binding: DirectiveBinding<string>) {
    if (!binding.value) {
      return;
    }

    loadImage(el, binding);
  },
  updated(el: HTMLImageElement, binding: DirectiveBinding<string>) {
    if (binding.value === binding.oldValue) {
      return;
    }

    loadImage(el, binding);
  },
};
