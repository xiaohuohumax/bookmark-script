declare global {
    interface Window {
        __bms_running_status__: {
            [key: string]: boolean
        };
    }
}

export { };