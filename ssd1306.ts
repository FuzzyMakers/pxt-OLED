//% color=#10A581 weight=100 icon="\f26c"
namespace OLED {
    /**
         * Inicializa disolay OLED
         * @param height Altura (em pixels)
         * @param width Largura (em pixels)
         */
        //% blockId=oled_init_terminal
        //% block="Inicia tela OLED altura %height|largura %width"
        //% icon="\uf1ec"
        //% shim=OLED::init_terminal
        //% weight=90
        //% blockGap=8
        export function init(height: number, width: number): void {
            return;
        }
  
        /**
         * Limpa a tela OLED
         */
        //% blockId=oled_clear_screen
        //% block="Limpa OLED Display"
        //% icon="\uf1ec"
        //% shim=OLED::clearDisplay
        export function clear(): void {
            return;
        }
  
        /**
         * Escreve uma mensagem de texto
         * @param text digite texto aqui
         */
        //% weight=87
        //% block="Mostrar string %text"
        //% async
        //% blockId=oled_print_string
        //% icon="\uf1ec"
        //% shim=OLED::showString
        //% weight=85
        //% blockGap=8
        export function showString(text: string): void {
            console.log("display: " + text);
            return;
        }
  
        /**
         * Mostra mensagens em numeros
         * @param number numeros na tela
         */
        //% weight=80
        //% blockId=oled_print_number
        //% block="Mostrar numero %number"
        //% async
        //% shim=OLED::showNumber
        export function showNumber(number: number): void {
            console.log("display: " + number);
            return;
        }
    }
