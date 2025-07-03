import { useCallback } from "react";

export const useAnimation = () => {
    const animateElements = useCallback((elements, delay = 0) => {
        elements.forEach((el, index) => {
            if (el) {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                setTimeout(() => {
                    el.style.transition = 'all 0.8s ease-out';
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, delay + index * 100);
            }
        });
    }, []);
    return { animateElements }
};