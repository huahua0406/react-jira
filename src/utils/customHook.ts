import { useState, useEffect, useRef } from 'react';

export const useMount = (fn: () => void) => {
    useEffect(() => {
        fn();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

export const useDebounceValue = <T>(value: T, delay: number = 300) => {
    const [debounceValue, setDebounceValue] = useState(value);
    useEffect(() => {
        const timer = setTimeout(() => setDebounceValue(value), delay);
        return () => clearTimeout(timer);
    }, [value, delay]);
    return debounceValue;
};

export const useThrottleValue = <T>(value: T, duration: number = 300) => {
    const [throttleValue, setThrottleValue] = useState(value);
    let Local = useRef({ flag: true }).current;
    useEffect(() => {
        let timer: any;
        if (Local.flag) {
            Local.flag = false;
            setThrottleValue(value);
            setTimeout(() => (Local.flag = true), duration);
        } else {
            timer = setTimeout(() => setThrottleValue(value), duration);
        }
        return () => clearTimeout(timer);
    }, [value, duration, Local]);
    return throttleValue;
};

// TODO:useDebounceHook
