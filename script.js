document.addEventListener('DOMContentLoaded', () => {

    // --- 1. DADOS GLOBAIS ---
    const catalogoDePecas = {
        50: { id: 50, tipo: 'Motor', nome: 'Motor Padrão V1', nivel: 1, atributos: { potencia: 45, confiabilidade: 75 } },
        2: { id: 2, tipo: 'Motor', nome: 'Motor Reforçado V6', nivel: 2, atributos: { potencia: 48, confiabilidade: 79 } },
        3: { id: 3, tipo: 'Motor', nome: 'Motor Reforçado D-5+1', nivel: 2, atributos: { potencia: 50, confiabilidade: 79 } },
        1: { id: 1, tipo: 'Motor', nome: 'Motor Padrão V6', nivel: 3, atributos: { potencia: 52, confiabilidade: 81 } },
        12: { id: 12, tipo: 'Motor', nome: 'Motor Padrão V5 Sport', nivel: 4, atributos: { potencia: 55, confiabilidade: 83 } },
        13: { id: 13, tipo: 'Motor', nome: 'Motor Especial V6 Sport', nivel: 5, atributos: { potencia: 65, confiabilidade: 82 } },
        14: { id: 14, tipo: 'Motor', nome: 'Motor Power Sport', nivel: 6, atributos: { potencia: 70, confiabilidade: 83 } },
        6: { id: 6, tipo: 'Motor', nome: 'Motor Otimizado V6', nivel: 6, atributos: { potencia: 75, confiabilidade: 84 } },
        15: { id: 15, tipo: 'Motor', nome: 'Motor Turbo', nivel: 7, atributos: { potencia: 80, confiabilidade: 85 } },
        16: { id: 16, tipo: 'Motor', nome: 'Motor Maxx', nivel: 8, atributos: { potencia: 84, confiabilidade: 86 } },
        17: { id: 17, tipo: 'Motor', nome: 'Motor Snn94', nivel: 9, atributos: { potencia: 87, confiabilidade: 89 } },
        18: { id: 18, tipo: 'Motor', nome: 'Motor SNx', nivel: 10, atributos: { potencia: 90, confiabilidade: 89 } },

        40: { id: 40, tipo: 'Suspensão', nome: 'Suspensão Simples', nivel: 1, atributos: { aderencia: 40, confiabilidade: 80 } },
        51: { id: 51, tipo: 'Suspensão', nome: 'Suspensão Simples V2', nivel: 2, atributos: { aderencia: 51, confiabilidade: 83 } },
        52: { id: 52, tipo: 'Suspensão', nome: 'Suspensão Simples V3', nivel: 3, atributos: { aderencia: 52, confiabilidade: 85 } },
        4: { id: 4, tipo: 'Suspensão', nome: 'Suspensão de Competição', nivel: 4, atributos: { aderencia: 53, confiabilidade: 87 } },
        29: { id: 29, tipo: 'Suspensão', nome: 'Suspensão M-Pro', nivel: 5, atributos: { aderencia: 59, confiabilidade: 89 } },
        27: { id: 27, tipo: 'Suspensão', nome: 'Suspensão Avx', nivel: 6, atributos: { aderencia: 63, confiabilidade: 90 } },
        53: { id: 53, tipo: 'Suspensão', nome: 'Suspensão DC', nivel: 7, atributos: { aderencia: 67, confiabilidade: 89 } },
        28: { id: 28, tipo: 'Suspensão', nome: 'Suspensão Avx', nivel: 8, atributos: { aderencia: 68, confiabilidade: 90 } },
        31: { id: 31, tipo: 'Suspensão', nome: 'Suspensão TTz', nivel: 9, atributos: { aderencia: 69, confiabilidade: 90 } },
        54: { id: 54, tipo: 'Suspensão', nome: 'Suspensão JTz', nivel: 10, atributos: { aderencia: 70, confiabilidade: 89 } },

        55: { id: 55, tipo: 'Chassi', nome: 'Chassi XyX', nivel: 1, atributos: { aerodinamica: 9, aderencia: 13, confiabilidade: 75 } },
        10: { id: 10, tipo: 'Chassi', nome: 'Chassi Básico', nivel: 2, atributos: { aerodinamica: 12, aderencia: 15, confiabilidade: 76 } },
        11: { id: 11, tipo: 'Chassi', nome: 'Chassi de Carbono', nivel: 3, atributos: { aerodinamica: 13, aderencia: 15, confiabilidade: 79 } },
        32: { id: 32, tipo: 'Chassi', nome: 'Chassi XxX', nivel: 4, atributos: { aerodinamica: 14, aderencia: 16, confiabilidade: 83 } },
        5: { id: 5, tipo: 'Chassi', nome: 'Chassi Reforçado', nivel: 5, atributos: { aerodinamica: 15, aderencia: 16, confiabilidade: 84 } },
        25: { id: 25, tipo: 'Chassi', nome: 'Chassi XxX', nivel: 6, atributos: { aerodinamica: 19, aderencia: 17, confiabilidade: 85 } },
        56: { id: 56, tipo: 'Chassi', nome: 'Chassi XxX', nivel: 7, atributos: { aerodinamica: 19, aderencia: 17, confiabilidade: 86} },
        57: { id: 57, tipo: 'Chassi', nome: 'Chassi XxX', nivel: 8, atributos: { aerodinamica: 20, aderencia: 18, confiabilidade: 87 } },
        26: { id: 26, tipo: 'Chassi', nome: 'Chassi ProM', nivel: 9, atributos: { aerodinamica: 20, aderencia: 19, confiabilidade: 88 } },
        58: { id: 58, tipo: 'Chassi', nome: 'C  hassi XxX', nivel: 10, atributos: { aerodinamica: 21, aderencia: 19, confiabilidade: 89 } },

        33: { id: 33, tipo: 'Asa Dianteira', nome: 'Asa T ProM', nivel: 1, atributos: { aerodinamica: 11, confiabilidade: 74 } },
        34: { id: 34, tipo: 'Asa Dianteira', nome: 'Asa G Pro', nivel: 2, atributos: { aerodinamica: 12, confiabilidade: 76 } },
        20: { id: 20, tipo: 'Asa Dianteira', nome: 'Asa Padrão', nivel: 3, atributos: { aerodinamica: 13, confiabilidade: 78 } },
        35: { id: 35, tipo: 'Asa Dianteira', nome: 'Asa G Pro', nivel: 3, atributos: { aerodinamica: 14, confiabilidade: 79 } },
        19: { id: 19, tipo: 'Asa Dianteira', nome: 'Asa X-Eficiência', nivel: 4, atributos: { aerodinamica: 15, confiabilidade: 80 } },
        22: { id: 22, tipo: 'Asa Dianteira', nome: 'Asa DeltaT', nivel: 5, atributos: { aerodinamica: 16, confiabilidade: 81 } },
        59: { id: 59, tipo: 'Asa Dianteira', nome: 'Asa T Pro', nivel: 6, atributos: { aerodinamica: 17, confiabilidade: 84 } },
        60: { id: 60, tipo: 'Asa Dianteira', nome: 'Asa NB', nivel: 7, atributos: { aerodinamica: 20, confiabilidade: 85 } },
        8: { id: 8, tipo: 'Asa Dianteira', nome: 'Asa de Alta Eficiência', nivel: 8, atributos: { aerodinamica: 22, confiabilidade: 86 } },
        21: { id: 21, tipo: 'Asa Dianteira', nome: 'Asa XxX', nivel: 9, atributos: { aerodinamica: 23, confiabilidade: 86 } },
        61: { id: 61, tipo: 'Asa Dianteira', nome: 'Asa Br-TN', nivel: 10, atributos: { aerodinamica: 23, confiabilidade: 89 } },

        30: { id: 30, tipo: 'Asa Traseira', nome: 'Asa Padrão', nivel: 1, atributos: { aerodinamica: 36, confiabilidade: 79 } },
        71: { id: 71, tipo: 'Asa Traseira', nome: 'Asa CRm', nivel: 2, atributos: { aerodinamica: 37, confiabilidade: 82 } },
        72: { id: 72, tipo: 'Asa Traseira', nome: 'Asa Lck', nivel: 3, atributos: { aerodinamica: 38, confiabilidade: 84 } },
        73: { id: 73, tipo: 'Asa Traseira', nome: 'Asa ChP', nivel: 4, atributos: { aerodinamica: 39, confiabilidade: 86 } },
        24: { id: 24, tipo: 'Asa Traseira', nome: 'Asa T ProM', nivel: 5, atributos: { aerodinamica: 40, confiabilidade: 87 } },
        74: { id: 74, tipo: 'Asa Traseira', nome: 'Asa br', nivel: 6, atributos: { aerodinamica: 40, confiabilidade: 90 } },
        23: { id: 23, tipo: 'Asa Traseira', nome: 'Asa T DRS Pro1', nivel: 7, atributos: { aerodinamica: 44, confiabilidade: 90 } },
        75: { id: 75, tipo: 'Asa Traseira', nome: 'Asa 555', nivel: 8, atributos: { aerodinamica: 43, confiabilidade: 89 } },
        9: { id: 9, tipo: 'Asa Traseira', nome: 'Asa Traseira DRS Pro', nivel: 9, atributos: { aerodinamica: 44, confiabilidade: 87 } },
        76: { id: 76, tipo: 'Asa Traseira', nome: 'Asa 333', nivel: 10, atributos: { aerodinamica: 44, confiabilidade: 90 } },
    };
    const especialistasDisponiveis = [ { id: 1, nome: "Adrian Newey Jr.", tipo: "Aerodinamicista", nivel: 5, salario: 12000 }, { id: 2, nome: "Paddy Lowe", tipo: "Projetista", nivel: 5, salario: 11900 }, { id: 3, nome: "Luca Marmorini", tipo: "Engenheiro de Motor", nivel: 5, salario: 12000 }, { id: 4, nome: "Helmut Marko Jr.", tipo: "Olheiro", nivel: 5, salario: 11650 }, { id: 5, nome: "Jo Bauer", tipo: "Treinador de Pilotos", nivel: 5, salario: 11750 } ];    const CUSTO_BASE_PROJETO = 50000;
    const calendarioCorridas = [
        { nome: "GP da Austrália (Melbourne)", imagem: "Autodromos/Australia.png", voltas: 58, tempoBaseVolta: 79, pitstopTime: 20, demandaMotor: 0.2, demandaAero: 0.4, demandaAderencia: 0.5 },
        { nome: "GP da China (Xangai)", imagem: "Autodromos/China.png", voltas: 56, tempoBaseVolta: 92, pitstopTime: 25, demandaMotor: 0.9, demandaAero: 0.5, demandaAderencia: 0.2 },
        { nome: "GP do Japão (Suzuka)", imagem: "Autodromos/Japan.png", voltas: 53, tempoBaseVolta: 90, pitstopTime: 28, demandaMotor: 0.7, demandaAero: 0.9, demandaAderencia: 0.5 },
        { nome: "GP do Bahrein (Sakhir)", imagem: "Autodromos/Bahrain.png", voltas: 57, tempoBaseVolta: 91, pitstopTime: 22, demandaMotor: 0.9, demandaAero: 0.4, demandaAderencia: 0.7 },
        { nome: "GP da Arábia Saudita (Jeddah)", imagem: "Autodromos/Arabia.png", voltas: 50, tempoBaseVolta: 90, pitstopTime: 26, demandaMotor: 1.0, demandaAero: 0.6, demandaAderencia: 0.3 },
        { nome: "Gp de Miami (EUA)", imagem: "Autodromos/Miami.png", voltas: 57, tempoBaseVolta: 89, pitstopTime: 21, demandaMotor: 0.6, demandaAero: 0.5, demandaAderencia: 1 },
        { nome: "GP de Emília-Romanha (Ímola)", imagem: "Autodromos/Imola.png", voltas: 63, tempoBaseVolta: 75, pitstopTime: 20, demandaMotor: 0.9, demandaAero: 0.6, demandaAderencia: 0.2 },
        { nome: "GP de Mônaco", imagem: "Autodromos/Monaco.png", voltas: 78, tempoBaseVolta: 75, pitstopTime: 28, demandaMotor: 0.7, demandaAero: 0.5, demandaAderencia: 0.5 },
        { nome: "GP da Espanha (Barcelona)", imagem: "Autodromos/Spain.png", voltas: 66, tempoBaseVolta: 76, pitstopTime: 23, demandaMotor: 0.6, demandaAero: 1, demandaAderencia: 0.5 },
        { nome: "GP do Canadá (Montreal)", imagem: "Autodromos/Canada.png", voltas: 70, tempoBaseVolta: 73, pitstopTime: 24, demandaMotor: 0.7, demandaAero: 0.5, demandaAderencia: 0.2 },
        { nome: "Gp da Áustria (Red Bull Ring)", imagem: "Autodromos/Austria.png", voltas: 71, tempoBaseVolta: 65, pitstopTime: 28, demandaMotor: 0.7, demandaAero: 0.3, demandaAderencia: 0.6 },
        { nome: "GP da Inglaterra (Silverstone)", imagem: "Autodromos/Inglaterra.png", voltas: 52, tempoBaseVolta: 87, pitstopTime: 22, demandaMotor: 0.7, demandaAero: 0.5, demandaAderencia: 0.2 },
        { nome: "GP da Bélgica (Spa)", imagem: "Autodromos/Belgica.png", voltas: 44, tempoBaseVolta: 106, pitstopTime: 21, demandaMotor: 0.8, demandaAero: 0.5, demandaAderencia: 0.3 },
        { nome: "GP da Hungria (Hungaroring)", imagem: "Autodromos/Hungria.png", voltas: 70, tempoBaseVolta: 76, pitstopTime: 20, demandaMotor: 0.8, demandaAero: 0.8, demandaAderencia: 0.7 },
        { nome: "Gp da Holanda (Zandvoort)", imagem: "Autodromos/Holanda.png", voltas: 72, tempoBaseVolta: 71, pitstopTime: 29, demandaMotor: 0.4, demandaAero: 0.5, demandaAderencia: 0.5 },
        { nome: "GP de Monza (Itália)", imagem: "Autodromos/Italia.png", voltas: 53, tempoBaseVolta: 85, pitstopTime: 22, demandaMotor: 0.7, demandaAero: 0.9, demandaAderencia: 0.5 },
        { nome: "GP do Azerbaijão (Baku)", imagem: "Autodromos/Azerbaijan.png", voltas: 51, tempoBaseVolta: 103, pitstopTime: 24, demandaMotor: 0.9, demandaAero: 0.5, demandaAderencia: 0.9 },
        { nome: "GP de Singapura (Marina Bay)", imagem: "Autodromos/Singapura.png", voltas: 61, tempoBaseVolta: 94, pitstopTime: 22, demandaMotor: 0.7, demandaAero: 0.7, demandaAderencia: 0.5 },
        { nome: "Gp dos EUA (Austin)", imagem: "Autodromos/EUA.png", voltas: 56, tempoBaseVolta: 96, pitstopTime: 21, demandaMotor: 0.8, demandaAero: 0.9, demandaAderencia: 0.8 },
        { nome: "GP do México (CDMX)", imagem: "Autodromos/Mexico.png", voltas: 71, tempoBaseVolta: 81, pitstopTime: 25, demandaMotor: 0.6, demandaAero: 0.8, demandaAderencia: 0.8 },
        { nome: "Gp do Brasil (Interlagos)", imagem: "Autodromos/Brasil.png", voltas: 71, tempoBaseVolta: 70, pitstopTime: 22, demandaMotor: 0.8, demandaAero: 0.9, demandaAderencia: 0.9 },
        { nome: "GP de Las Vegas", imagem: "Autodromos/LasVegas.png", voltas: 50, tempoBaseVolta: 95, pitstopTime: 21, demandaMotor: 0.9, demandaAero: 0.3, demandaAderencia: 0.8 },
        { nome: "GP do Catar (Lusail)", imagem: "Autodromos/Qatar.png", voltas: 57, tempoBaseVolta: 84, pitstopTime: 26, demandaMotor: 0.9, demandaAero: 0.6, demandaAderencia: 0.7 },
        { nome: "GP de Abu Dhabi (Yas Marina)", imagem: "Autodromos/Abudabi.png", voltas: 55, tempoBaseVolta: 86, pitstopTime: 21, demandaMotor: 0.8, demandaAero: 0.9, demandaAderencia: 0.7 },

    ];
    const coordenadasPistas = {
        "GP da Austrália (Melbourne)": [{ x: 380, y: 360 }, 	{ x: 270, y: 360 }, 	{ x: 260, y: 340 }, 	{ x: 250, y: 330 }, 	{ x: 200, y: 340 }, 	{ x: 80, y: 330 }, 	{ x: 80, y: 320 }, 	{ x: 90, y: 310 }, 	{ x: 130, y: 270 }, 	{ x: 70, y: 210 }, 	{ x: 80, y: 170 }, 	{ x: 90, y: 130 }, 	{ x: 100, y: 100 }, 	{ x: 120, y: 100 }, 	{ x: 160, y: 70 }, 	{ x: 200, y: 110 }, 	{ x: 230, y: 170 }, 	{ x: 240, y: 180 }, 	{ x: 300, y: 190 }, 	{ x: 340, y: 200 }, 	{ x: 430, y: 200 }, 	{ x: 460, y: 170 }, 	{ x: 530, y: 160 }, 	{ x: 570, y: 150 }, 	{ x: 710, y: 220 }, 	{ x: 710, y: 230 }, 	{ x: 630, y: 330 }, 	{ x: 610, y: 330 }, 	{ x: 550, y: 290 }, 	{ x: 550, y: 350 }, 	{ x: 540, y: 360 }, 	{ x: 380, y: 360 }],
        "GP da China (Xangai)": [{ x: 200, y: 240 }, 	{ x: 230, y: 100 }, 	{ x: 250, y: 80 }, 	{ x: 260, y: 80 }, 	{ x: 290, y: 120 }, 	{ x: 290, y: 150 }, 	{ x: 270, y: 170 }, 	{ x: 250, y: 150 }, 	{ x: 240, y: 160 }, 	{ x: 240, y: 180 }, 	{ x: 270, y: 210 }, 	{ x: 440, y: 130 }, 	{ x: 600, y: 130 }, 	{ x: 620, y: 150 }, 	{ x: 620, y: 170 }, 	{ x: 570, y: 190 }, 	{ x: 560, y: 210 }, 	{ x: 590, y: 240 }, 	{ x: 590, y: 260 }, 	{ x: 570, y: 280 }, 	{ x: 540, y: 290 }, 	{ x: 500, y: 270 }, 	{ x: 480, y: 260 }, 	{ x: 470, y: 270 }, 	{ x: 480, y: 330 }, 	{ x: 650, y: 340 }, 	{ x: 660, y: 330 }, 	{ x: 660, y: 320 }, 	{ x: 640, y: 300 }, 	{ x: 640, y: 290 }, 	{ x: 660, y: 270 }, 	{ x: 670, y: 270 }, 	{ x: 710, y: 310 }, 	{ x: 710, y: 320 }, 	{ x: 660, y: 370 }, 	{ x: 100, y: 370 }, 	{ x: 80, y: 350 }, 	{ x: 80, y: 340 }, 	{ x: 180, y: 330 }, 	{ x: 200, y: 240 }],
        "GP do Japão (Suzuka)": [{ x: 570, y: 190 }, 	{ x: 700, y: 320 }, 	{ x: 700, y: 350 }, 	{ x: 680, y: 370 }, 	{ x: 620, y: 310 }, 	{ x: 600, y: 330 }, 	{ x: 590, y: 320 }, 	{ x: 580, y: 280 }, 	{ x: 560, y: 280 }, 	{ x: 540, y: 300 }, 	{ x: 530, y: 300 }, 	{ x: 520, y: 290 }, 	{ x: 520, y: 270 }, 	{ x: 530, y: 240 }, 	{ x: 510, y: 220 }, 	{ x: 500, y: 220 }, 	{ x: 450, y: 270 }, 	{ x: 420, y: 270 }, 	{ x: 410, y: 260 }, 	{ x: 360, y: 160 }, 	{ x: 360, y: 130 }, 	{ x: 370, y: 100 }, 	{ x: 360, y: 90 }, 	{ x: 260, y: 200 }, 	{ x: 240, y: 200 }, 	{ x: 160, y: 110 }, 	{ x: 140, y: 110 }, 	{ x: 110, y: 140 }, 	{ x: 100, y: 170 }, 	{ x: 110, y: 190 }, 	{ x: 150, y: 230 }, 	{ x: 330, y: 270 }, 	{ x: 350, y: 270 }, 	{ x: 480, y: 170 }, 	{ x: 510, y: 200 }, 	{ x: 530, y: 160 }, 	{ x: 540, y: 160 }, 	{ x: 570, y: 190 } ],
        "GP do Bahrein (Sakhir)": [{ x: 520, y: 370 }, 	{ x: 90, y: 370 }, 	{ x: 80, y: 360 }, 	{ x: 120, y: 320 }, 	{ x: 120, y: 310 }, 	{ x: 100, y: 280 }, 	{ x: 100, y: 270 }, 	{ x: 170, y: 100 }, 	{ x: 180, y: 90 }, 	{ x: 190, y: 100 }, 	{ x: 240, y: 150 }, 	{ x: 260, y: 150 }, 	{ x: 270, y: 160 }, 	{ x: 280, y: 190 }, 	{ x: 360, y: 270 }, 	{ x: 360, y: 280 }, 	{ x: 350, y: 290 }, 	{ x: 250, y: 280 }, 	{ x: 220, y: 310 }, 	{ x: 220, y: 320 }, 	{ x: 330, y: 340 }, 	{ x: 550, y: 320 }, 	{ x: 560, y: 310 }, 	{ x: 560, y: 280 }, 	{ x: 490, y: 230 }, 	{ x: 490, y: 200 }, 	{ x: 580, y: 100 }, 	{ x: 590, y: 100 }, 	{ x: 730, y: 290 }, 	{ x: 730, y: 300 }, 	{ x: 660, y: 370 }, 	{ x: 520, y: 370 }],
        "GP da Arábia Saudita (Jeddah)": [{ x: 640, y: 110 }, 	{ x: 560, y: 120 }, 	{ x: 550, y: 130 }, 	{ x: 570, y: 150 }, 	{ x: 570, y: 170 }, 	{ x: 560, y: 180 }, 	{ x: 450, y: 180 }, 	{ x: 440, y: 190 }, 	{ x: 410, y: 240 }, 	{ x: 390, y: 250 }, 	{ x: 380, y: 250 }, 	{ x: 360, y: 230 }, 	{ x: 340, y: 230 }, 	{ x: 330, y: 240 }, 	{ x: 320, y: 240 }, 	{ x: 280, y: 210 }, 	{ x: 260, y: 210 }, 	{ x: 220, y: 230 }, 	{ x: 160, y: 250 }, 	{ x: 120, y: 280 }, 	{ x: 100, y: 310 }, 	{ x: 90, y: 330 }, 	{ x: 110, y: 350 }, 	{ x: 140, y: 370 }, 	{ x: 170, y: 360 }, 	{ x: 200, y: 330 }, 	{ x: 210, y: 320 }, 	{ x: 230, y: 320 }, 	{ x: 240, y: 330 }, 	{ x: 270, y: 330 }, 	{ x: 300, y: 300 }, 	{ x: 310, y: 290 }, 	{ x: 320, y: 300 }, 	{ x: 350, y: 340 }, 	{ x: 360, y: 350 }, 	{ x: 390, y: 350 }, 	{ x: 450, y: 260 }, 	{ x: 460, y: 250 }, 	{ x: 510, y: 240 }, 	{ x: 570, y: 220 }, 	{ x: 590, y: 220 }, 	{ x: 590, y: 190 }, 	{ x: 600, y: 170 }, 	{ x: 620, y: 170 }, 	{ x: 640, y: 190 }, 	{ x: 650, y: 200 }, 	{ x: 690, y: 200 }, 	{ x: 730, y: 160 }, 	{ x: 740, y: 100 }, 	{ x: 730, y: 80 }, 	{ x: 700, y: 90 }, 	{ x: 640, y: 110 }],
        "Gp de Miami (EUA)": [{ x: 330, y: 130 }, 	{ x: 410, y: 220 }, 	{ x: 420, y: 240 }, 	{ x: 410, y: 250 }, 	{ x: 400, y: 270 }, 	{ x: 400, y: 310 }, 	{ x: 390, y: 330 }, 	{ x: 370, y: 340 }, 	{ x: 350, y: 340 }, 	{ x: 330, y: 320 }, 	{ x: 270, y: 270 }, 	{ x: 260, y: 260 }, 	{ x: 250, y: 260 }, 	{ x: 240, y: 270 }, 	{ x: 220, y: 290 }, 	{ x: 210, y: 290 }, 	{ x: 200, y: 260 }, 	{ x: 190, y: 250 }, 	{ x: 170, y: 250 }, 	{ x: 160, y: 260 }, 	{ x: 150, y: 280 }, 	{ x: 140, y: 300 }, 	{ x: 150, y: 320 }, 	{ x: 170, y: 310 }, 	{ x: 180, y: 310 }, 	{ x: 200, y: 330 }, 	{ x: 220, y: 330 }, 	{ x: 300, y: 330 }, 	{ x: 320, y: 340 }, 	{ x: 350, y: 360 }, 	{ x: 370, y: 370 }, 	{ x: 390, y: 370 }, 	{ x: 420, y: 360 }, 	{ x: 510, y: 310 }, 	{ x: 550, y: 270 }, 	{ x: 560, y: 260 }, 	{ x: 550, y: 240 }, 	{ x: 540, y: 220 }, 	{ x: 530, y: 210 }, 	{ x: 540, y: 200 }, 	{ x: 570, y: 200 }, 	{ x: 580, y: 190 }, 	{ x: 590, y: 170 }, 	{ x: 570, y: 160 }, 	{ x: 590, y: 130 }, 	{ x: 580, y: 120 }, 	{ x: 210, y: 90 }, 	{ x: 200, y: 100 }, 	{ x: 210, y: 120 }, 	{ x: 230, y: 140 }, 	{ x: 240, y: 140 }, 	{ x: 270, y: 120 }, 	{ x: 290, y: 110 }, 	{ x: 310, y: 120 }, 	{ x: 330, y: 130 }],
        "GP de Emília-Romanha (Ímola)": [{ x: 630, y: 110 }, 	{ x: 580, y: 110 }, 	{ x: 410, y: 70 }, 	{ x: 310, y: 80 }, 	{ x: 290, y: 130 }, 	{ x: 280, y: 140 }, 	{ x: 250, y: 140 }, 	{ x: 170, y: 220 }, 	{ x: 160, y: 230 }, 	{ x: 160, y: 270 }, 	{ x: 80, y: 350 }, 	{ x: 70, y: 360 }, 	{ x: 70, y: 370 }, 	{ x: 80, y: 380 }, 	{ x: 210, y: 340 }, 	{ x: 290, y: 360 }, 	{ x: 300, y: 350 }, 	{ x: 310, y: 340 }, 	{ x: 320, y: 300 }, 	{ x: 300, y: 240 }, 	{ x: 340, y: 200 }, 	{ x: 370, y: 230 }, 	{ x: 560, y: 200 }, 	{ x: 570, y: 220 }, 	{ x: 640, y: 210 }, 	{ x: 690, y: 150 }, 	{ x: 730, y: 110 }, 	{ x: 740, y: 100 }, 	{ x: 710, y: 70 }, 	{ x: 700, y: 70 }, 	{ x: 650, y: 110 }, 	{ x: 630, y: 110 }],
        "GP de Mônaco": [{ x: 150, y: 220 }, 	{ x: 190, y: 170 }, 	{ x: 240, y: 130 }, 	{ x: 280, y: 100 }, 	{ x: 290, y: 80 }, 	{ x: 350, y: 170 }, 	{ x: 410, y: 190 }, 	{ x: 460, y: 200 }, 	{ x: 510, y: 240 }, 	{ x: 520, y: 250 }, 	{ x: 550, y: 250 }, 	{ x: 570, y: 220 }, 	{ x: 580, y: 170 }, 	{ x: 580, y: 120 }, 	{ x: 590, y: 100 }, 	{ x: 600, y: 90 }, 	{ x: 670, y: 90 }, 	{ x: 680, y: 100 }, 	{ x: 670, y: 120 }, 	{ x: 660, y: 190 }, 	{ x: 670, y: 200 }, 	{ x: 690, y: 200 }, 	{ x: 700, y: 190 }, 	{ x: 690, y: 130 }, 	{ x: 700, y: 120 }, 	{ x: 720, y: 130 }, 	{ x: 730, y: 130 }, 	{ x: 740, y: 140 }, 	{ x: 730, y: 200 }, 	{ x: 690, y: 270 }, 	{ x: 640, y: 300 }, 	{ x: 560, y: 330 }, 	{ x: 350, y: 200 }, 	{ x: 340, y: 200 }, 	{ x: 340, y: 220 }, 	{ x: 310, y: 220 }, 	{ x: 280, y: 200 }, 	{ x: 250, y: 160 }, 	{ x: 190, y: 220 }, 	{ x: 180, y: 230 }, 	{ x: 180, y: 270 }, 	{ x: 170, y: 280 }, 	{ x: 150, y: 320 }, 	{ x: 130, y: 330 }, 	{ x: 130, y: 360 }, 	{ x: 120, y: 370 }, 	{ x: 90, y: 340 }, 	{ x: 80, y: 320 }, 	{ x: 100, y: 310 }, 	{ x: 150, y: 220 }],
        "GP da Espanha (Barcelona)": [{ x: 550, y: 370 }, 	{ x: 230, y: 370 }, 	{ x: 220, y: 360 }, 	{ x: 210, y: 350 }, 	{ x: 210, y: 320 }, 	{ x: 200, y: 290 }, 	{ x: 170, y: 270 }, 	{ x: 150, y: 240 }, 	{ x: 140, y: 210 }, 	{ x: 140, y: 200 }, 	{ x: 150, y: 170 }, 	{ x: 170, y: 140 }, 	{ x: 210, y: 120 }, 	{ x: 310, y: 120 }, 	{ x: 330, y: 140 }, 	{ x: 340, y: 160 }, 	{ x: 330, y: 180 }, 	{ x: 300, y: 210 }, 	{ x: 220, y: 210 }, 	{ x: 210, y: 220 }, 	{ x: 200, y: 230 }, 	{ x: 200, y: 240 }, 	{ x: 210, y: 250 }, 	{ x: 270, y: 310 }, 	{ x: 290, y: 320 }, 	{ x: 340, y: 320 }, 	{ x: 350, y: 310 }, 	{ x: 350, y: 280 }, 	{ x: 350, y: 270 }, 	{ x: 400, y: 160 }, 	{ x: 410, y: 140 }, 	{ x: 430, y: 130 }, 	{ x: 450, y: 140 }, 	{ x: 610, y: 290 }, 	{ x: 620, y: 300 }, 	{ x: 630, y: 300 }, 	{ x: 640, y: 290 }, 	{ x: 650, y: 270 }, 	{ x: 650, y: 250 }, 	{ x: 630, y: 230 }, 	{ x: 600, y: 210 }, 	{ x: 580, y: 190 }, 	{ x: 580, y: 170 }, 	{ x: 590, y: 150 }, 	{ x: 610, y: 140 }, 	{ x: 620, y: 140 }, 	{ x: 680, y: 180 }, 	{ x: 690, y: 190 }, 	{ x: 690, y: 320 }, 	{ x: 690, y: 340 }, 	{ x: 680, y: 350 }, 	{ x: 670, y: 360 }, 	{ x: 660, y: 370 }, 	{ x: 550, y: 370 }],
        "GP do Canadá (Montreal)": [{ x: 550, y: 210 }, 	{ x: 620, y: 240 }, 	{ x: 630, y: 250 }, 	{ x: 640, y: 240 }, 	{ x: 650, y: 240 }, 	{ x: 660, y: 250 }, 	{ x: 650, y: 260 }, 	{ x: 630, y: 280 }, 	{ x: 590, y: 310 }, 	{ x: 580, y: 320 }, 	{ x: 560, y: 300 }, 	{ x: 520, y: 320 }, 	{ x: 500, y: 330 }, 	{ x: 490, y: 330 }, 	{ x: 450, y: 300 }, 	{ x: 440, y: 300 }, 	{ x: 440, y: 310 }, 	{ x: 440, y: 320 }, 	{ x: 430, y: 330 }, 	{ x: 420, y: 330 }, 	{ x: 350, y: 300 }, 	{ x: 330, y: 290 }, 	{ x: 280, y: 240 }, 	{ x: 270, y: 230 }, 	{ x: 280, y: 220 }, 	{ x: 280, y: 210 }, 	{ x: 270, y: 200 }, 	{ x: 240, y: 170 }, 	{ x: 180, y: 130 }, 	{ x: 140, y: 120 }, 	{ x: 130, y: 110 }, 	{ x: 140, y: 100 }, 	{ x: 170, y: 110 }, 	{ x: 230, y: 110 }, 	{ x: 280, y: 120 }, 	{ x: 440, y: 160 }, 	{ x: 450, y: 170 }, 	{ x: 450, y: 180 }, 	{ x: 460, y: 190 }, 	{ x: 550, y: 210 }],
        "Gp da Áustria (Red Bull Ring)": [{ x: 500, y: 290 }, 	{ x: 430, y: 360 }, 	{ x: 420, y: 370 }, 	{ x: 410, y: 360 }, 	{ x: 330, y: 310 }, 	{ x: 320, y: 300 }, 	{ x: 280, y: 250 }, 	{ x: 270, y: 240 }, 	{ x: 200, y: 210 }, 	{ x: 190, y: 200 }, 	{ x: 200, y: 190 }, 	{ x: 230, y: 170 }, 	{ x: 270, y: 160 }, 	{ x: 320, y: 150 }, 	{ x: 400, y: 110 }, 	{ x: 410, y: 120 }, 	{ x: 410, y: 140 }, 	{ x: 400, y: 170 }, 	{ x: 370, y: 190 }, 	{ x: 320, y: 200 }, 	{ x: 310, y: 210 }, 	{ x: 310, y: 240 }, 	{ x: 300, y: 220 }, 	{ x: 360, y: 280 }, 	{ x: 370, y: 280 }, 	{ x: 380, y: 270 }, 	{ x: 390, y: 250 }, 	{ x: 390, y: 240 }, 	{ x: 390, y: 230 }, 	{ x: 400, y: 220 }, 	{ x: 410, y: 210 }, 	{ x: 530, y: 150 }, 	{ x: 540, y: 140 }, 	{ x: 550, y: 150 }, 	{ x: 580, y: 190 }, 	{ x: 580, y: 220 }, 	{ x: 570, y: 230 }, 	{ x: 520, y: 280 }, 	{ x: 500, y: 290 }],
        "GP da Inglaterra (Silverstone)": [{ x: 330, y: 100 }, 	{ x: 390, y: 150 }, 	{ x: 400, y: 160 }, 	{ x: 400, y: 220 }, 	{ x: 400, y: 240 }, 	{ x: 410, y: 250 }, 	{ x: 430, y: 280 }, 	{ x: 430, y: 290 }, 	{ x: 420, y: 300 }, 	{ x: 400, y: 310 }, 	{ x: 400, y: 320 }, 	{ x: 410, y: 330 }, 	{ x: 430, y: 340 }, 	{ x: 450, y: 330 }, 	{ x: 550, y: 180 }, 	{ x: 550, y: 160 }, 	{ x: 540, y: 150 }, 	{ x: 520, y: 140 }, 	{ x: 510, y: 130 }, 	{ x: 520, y: 110 }, 	{ x: 540, y: 120 }, 	{ x: 570, y: 140 }, 	{ x: 580, y: 150 }, 	{ x: 590, y: 170 }, 	{ x: 600, y: 300 }, 	{ x: 600, y: 320 }, 	{ x: 590, y: 330 }, 	{ x: 540, y: 350 }, 	{ x: 490, y: 350 }, 	{ x: 470, y: 360 }, 	{ x: 460, y: 370 }, 	{ x: 450, y: 370 }, 	{ x: 430, y: 360 }, 	{ x: 420, y: 360 }, 	{ x: 410, y: 370 }, 	{ x: 390, y: 380 }, 	{ x: 380, y: 370 }, 	{ x: 370, y: 350 }, 	{ x: 360, y: 340 }, 	{ x: 210, y: 240 }, 	{ x: 190, y: 220 }, 	{ x: 190, y: 200 }, 	{ x: 200, y: 180 }, 	{ x: 220, y: 170 }, 	{ x: 240, y: 150 }, 	{ x: 270, y: 120 }, 	{ x: 270, y: 110 }, 	{ x: 260, y: 100 }, 	{ x: 260, y: 90 }, 	{ x: 270, y: 80 }, 	{ x: 290, y: 70 }, 	{ x: 300, y: 70 }, 	{ x: 310, y: 80 }, 	{ x: 330, y: 100 }],
        "GP da Bélgica (Spa)": [{ x: 250, y: 300 }, 	{ x: 210, y: 350 }, 	{ x: 200, y: 360 }, 	{ x: 190, y: 360 }, 	{ x: 190, y: 350 }, 	{ x: 200, y: 320 }, 	{ x: 210, y: 290 }, 	{ x: 230, y: 260 }, 	{ x: 250, y: 230 }, 	{ x: 260, y: 210 }, 	{ x: 280, y: 210 }, 	{ x: 300, y: 180 }, 	{ x: 320, y: 150 }, 	{ x: 360, y: 130 }, 	{ x: 450, y: 80 }, 	{ x: 460, y: 80 }, 	{ x: 470, y: 90 }, 	{ x: 480, y: 90 }, 	{ x: 490, y: 80 }, 	{ x: 500, y: 90 }, 	{ x: 530, y: 130 }, 	{ x: 530, y: 140 }, 	{ x: 530, y: 150 }, 	{ x: 520, y: 150 }, 	{ x: 510, y: 140 }, 	{ x: 500, y: 130 }, 	{ x: 490, y: 130 }, 	{ x: 460, y: 150 }, 	{ x: 420, y: 160 }, 	{ x: 410, y: 170 }, 	{ x: 410, y: 180 }, 	{ x: 410, y: 210 }, 	{ x: 420, y: 220 }, 	{ x: 430, y: 230 }, 	{ x: 450, y: 240 }, 	{ x: 480, y: 250 }, 	{ x: 490, y: 260 }, 	{ x: 490, y: 280 }, 	{ x: 490, y: 300 }, 	{ x: 500, y: 310 }, 	{ x: 530, y: 320 }, 	{ x: 530, y: 330 }, 	{ x: 520, y: 360 }, 	{ x: 510, y: 370 }, 	{ x: 500, y: 370 }, 	{ x: 480, y: 360 }, 	{ x: 460, y: 340 }, 	{ x: 440, y: 310 }, 	{ x: 420, y: 280 }, 	{ x: 400, y: 260 }, 	{ x: 370, y: 250 }, 	{ x: 360, y: 250 }, 	{ x: 320, y: 280 }, 	{ x: 300, y: 290 }, 	{ x: 280, y: 300 }, 	{ x: 280, y: 280 }, 	{ x: 270, y: 280 }, 	{ x: 250, y: 300 }],
        "GP da Hungria (Hungaroring)": [{ x: 260, y: 280 }, 	{ x: 260, y: 90 }, 	{ x: 280, y: 70 }, 	{ x: 300, y: 90 }, 	{ x: 310, y: 100 }, 	{ x: 310, y: 210 }, 	{ x: 320, y: 220 }, 	{ x: 330, y: 230 }, 	{ x: 340, y: 230 }, 	{ x: 350, y: 220 }, 	{ x: 360, y: 210 }, 	{ x: 370, y: 180 }, 	{ x: 380, y: 170 }, 	{ x: 460, y: 150 }, 	{ x: 500, y: 160 }, 	{ x: 510, y: 140 }, 	{ x: 530, y: 100 }, 	{ x: 540, y: 100 }, 	{ x: 550, y: 110 }, 	{ x: 560, y: 130 }, 	{ x: 560, y: 160 }, 	{ x: 550, y: 190 }, 	{ x: 540, y: 200 }, 	{ x: 530, y: 200 }, 	{ x: 510, y: 230 }, 	{ x: 510, y: 250 }, 	{ x: 520, y: 260 }, 	{ x: 530, y: 280 }, 	{ x: 520, y: 290 }, 	{ x: 490, y: 310 }, 	{ x: 480, y: 320 }, 	{ x: 470, y: 340 }, 	{ x: 470, y: 360 }, 	{ x: 460, y: 370 }, 	{ x: 370, y: 370 }, 	{ x: 350, y: 370 }, 	{ x: 350, y: 350 }, 	{ x: 360, y: 320 }, 	{ x: 360, y: 300 }, 	{ x: 350, y: 280 }, 	{ x: 340, y: 270 }, 	{ x: 330, y: 270 }, 	{ x: 320, y: 280 }, 	{ x: 310, y: 300 }, 	{ x: 310, y: 350 }, 	{ x: 310, y: 360 }, 	{ x: 300, y: 370 }, 	{ x: 280, y: 380 }, 	{ x: 260, y: 360 }, 	{ x: 260, y: 340 }, 	{ x: 260, y: 280 }],
        "Gp da Holanda (Zandvoort)": [{ x: 530, y: 250 }, 	{ x: 490, y: 370 }, 	{ x: 480, y: 380 }, 	{ x: 450, y: 380 }, 	{ x: 440, y: 370 }, 	{ x: 440, y: 350 }, 	{ x: 460, y: 310 }, 	{ x: 460, y: 290 }, 	{ x: 470, y: 270 }, 	{ x: 500, y: 260 }, 	{ x: 510, y: 250 }, 	{ x: 510, y: 230 }, 	{ x: 490, y: 230 }, 	{ x: 440, y: 250 }, 	{ x: 400, y: 250 }, 	{ x: 360, y: 240 }, 	{ x: 330, y: 250 }, 	{ x: 300, y: 270 }, 	{ x: 280, y: 280 }, 	{ x: 230, y: 280 }, 	{ x: 210, y: 270 }, 	{ x: 190, y: 250 }, 	{ x: 190, y: 220 }, 	{ x: 200, y: 190 }, 	{ x: 240, y: 130 }, 	{ x: 260, y: 120 }, 	{ x: 280, y: 120 }, 	{ x: 310, y: 130 }, 	{ x: 330, y: 140 }, 	{ x: 340, y: 160 }, 	{ x: 330, y: 180 }, 	{ x: 260, y: 190 }, 	{ x: 250, y: 200 }, 	{ x: 250, y: 220 }, 	{ x: 260, y: 230 }, 	{ x: 280, y: 240 }, 	{ x: 360, y: 220 }, 	{ x: 440, y: 190 }, 	{ x: 450, y: 180 }, 	{ x: 460, y: 180 }, 	{ x: 480, y: 200 }, 	{ x: 490, y: 200 }, 	{ x: 500, y: 190 }, 	{ x: 500, y: 170 }, 	{ x: 480, y: 100 }, 	{ x: 480, y: 80 }, 	{ x: 490, y: 70 }, 	{ x: 540, y: 70 }, 	{ x: 570, y: 90 }, 	{ x: 580, y: 110 }, 	{ x: 580, y: 140 }, 	{ x: 530, y: 250 }],
        "GP de Monza (Itália)": [{ x: 510, y: 350 }, 	{ x: 330, y: 350 }, 	{ x: 330, y: 330 }, 	{ x: 310, y: 340 }, 	{ x: 280, y: 350 }, 	{ x: 260, y: 350 }, 	{ x: 230, y: 340 }, 	{ x: 210, y: 310 }, 	{ x: 210, y: 280 }, 	{ x: 210, y: 200 }, 	{ x: 190, y: 200 }, 	{ x: 190, y: 160 }, 	{ x: 170, y: 120 }, 	{ x: 170, y: 110 }, 	{ x: 180, y: 100 }, 	{ x: 220, y: 90 }, 	{ x: 230, y: 90 }, 	{ x: 240, y: 100 }, 	{ x: 270, y: 170 }, 	{ x: 350, y: 260 }, 	{ x: 360, y: 270 }, 	{ x: 380, y: 270 }, 	{ x: 390, y: 280 }, 	{ x: 390, y: 290 }, 	{ x: 400, y: 290 }, 	{ x: 570, y: 290 }, 	{ x: 580, y: 300 }, 	{ x: 580, y: 310 }, 	{ x: 570, y: 330 }, 	{ x: 560, y: 340 }, 	{ x: 540, y: 350 }, 	{ x: 510, y: 350 }],
        "GP do Azerbaijão (Baku)": [{ x: 470, y: 340 }, 	{ x: 510, y: 370 }, 	{ x: 520, y: 380 }, 	{ x: 530, y: 380 }, 	{ x: 560, y: 310 }, 	{ x: 420, y: 200 }, 	{ x: 400, y: 250 }, 	{ x: 340, y: 210 }, 	{ x: 330, y: 230 }, 	{ x: 270, y: 190 }, 	{ x: 290, y: 160 }, 	{ x: 290, y: 150 }, 	{ x: 280, y: 140 }, 	{ x: 290, y: 120 }, 	{ x: 220, y: 80 }, 	{ x: 190, y: 100 }, 	{ x: 160, y: 130 }, 	{ x: 150, y: 140 }, 	{ x: 160, y: 210 }, 	{ x: 160, y: 220 }, 	{ x: 170, y: 220 }, 	{ x: 200, y: 210 }, 	{ x: 240, y: 230 }, 	{ x: 270, y: 220 }, 	{ x: 310, y: 240 }, 	{ x: 380, y: 270 }, 	{ x: 470, y: 340 }],
        "GP de Singapura (Marina Bay)": [{ x: 560, y: 240 }, 	{ x: 540, y: 90 }, 	{ x: 520, y: 90 }, 	{ x: 510, y: 70 }, 	{ x: 500, y: 80 }, 	{ x: 500, y: 120 }, 	{ x: 510, y: 190 }, 	{ x: 500, y: 200 }, 	{ x: 390, y: 190 }, 	{ x: 320, y: 130 }, 	{ x: 310, y: 140 }, 	{ x: 290, y: 180 }, 	{ x: 280, y: 190 }, 	{ x: 270, y: 180 }, 	{ x: 260, y: 160 }, 	{ x: 250, y: 150 }, 	{ x: 240, y: 160 }, 	{ x: 190, y: 260 }, 	{ x: 190, y: 280 }, 	{ x: 210, y: 300 }, 	{ x: 220, y: 330 }, 	{ x: 230, y: 340 }, 	{ x: 250, y: 370 }, 	{ x: 290, y: 210 }, 	{ x: 340, y: 250 }, 	{ x: 460, y: 260 }, 	{ x: 460, y: 280 }, 	{ x: 470, y: 290 }, 	{ x: 540, y: 300 }, 	{ x: 560, y: 260 }, 	{ x: 560, y: 240 }],
        "Gp dos EUA (Austin)": [{ x: 190, y: 220 }, 	{ x: 270, y: 340 }, 	{ x: 280, y: 350 }, 	{ x: 290, y: 350 }, 	{ x: 290, y: 330 }, 	{ x: 280, y: 300 }, 	{ x: 280, y: 280 }, 	{ x: 290, y: 260 }, 	{ x: 330, y: 240 }, 	{ x: 340, y: 220 }, 	{ x: 360, y: 210 }, 	{ x: 360, y: 180 }, 	{ x: 370, y: 170 }, 	{ x: 380, y: 160 }, 	{ x: 390, y: 160 }, 	{ x: 400, y: 170 }, 	{ x: 420, y: 180 }, 	{ x: 430, y: 160 }, 	{ x: 440, y: 150 }, 	{ x: 450, y: 160 }, 	{ x: 460, y: 170 }, 	{ x: 490, y: 170 }, 	{ x: 500, y: 160 }, 	{ x: 550, y: 90 }, 	{ x: 550, y: 70 }, 	{ x: 530, y: 80 }, 	{ x: 450, y: 100 }, 	{ x: 390, y: 110 }, 	{ x: 330, y: 110 }, 	{ x: 310, y: 110 }, 	{ x: 310, y: 120 }, 	{ x: 330, y: 180 }, 	{ x: 320, y: 180 }, 	{ x: 310, y: 170 }, 	{ x: 300, y: 140 }, 	{ x: 280, y: 130 }, 	{ x: 280, y: 150 }, 	{ x: 300, y: 190 }, 	{ x: 300, y: 210 }, 	{ x: 290, y: 230 }, 	{ x: 270, y: 230 }, 	{ x: 250, y: 220 }, 	{ x: 240, y: 190 }, 	{ x: 230, y: 170 }, 	{ x: 220, y: 160 }, 	{ x: 170, y: 180 }, 	{ x: 160, y: 190 }, 	{ x: 170, y: 200 }, 	{ x: 190, y: 220 }],
        "GP do México (CDMX)": [{ x: 230, y: 90 }, 	{ x: 560, y: 90 }, 	{ x: 560, y: 120 }, 	{ x: 580, y: 120 }, 	{ x: 590, y: 130 }, 	{ x: 580, y: 170 }, 	{ x: 560, y: 220 }, 	{ x: 520, y: 330 }, 	{ x: 540, y: 350 }, 	{ x: 500, y: 380 }, 	{ x: 490, y: 370 }, 	{ x: 490, y: 270 }, 	{ x: 470, y: 260 }, 	{ x: 460, y: 240 }, 	{ x: 440, y: 230 }, 	{ x: 400, y: 230 }, 	{ x: 390, y: 200 }, 	{ x: 340, y: 180 }, 	{ x: 240, y: 180 }, 	{ x: 220, y: 120 }, 	{ x: 210, y: 150 }, 	{ x: 190, y: 130 }, 	{ x: 170, y: 130 }, 	{ x: 170, y: 120 }, 	{ x: 190, y: 100 }, 	{ x: 200, y: 90 }, 	{ x: 230, y: 90 }],
        "Gp do Brasil (Interlagos)": [{ x: 290, y: 100 }, 	{ x: 190, y: 140 }, 	{ x: 180, y: 150 }, 	{ x: 180, y: 160 }, 	{ x: 190, y: 170 }, 	{ x: 210, y: 200 }, 	{ x: 190, y: 230 }, 	{ x: 190, y: 250 }, 	{ x: 200, y: 280 }, 	{ x: 210, y: 300 }, 	{ x: 230, y: 320 }, 	{ x: 420, y: 380 }, 	{ x: 440, y: 380 }, 	{ x: 450, y: 370 }, 	{ x: 450, y: 310 }, 	{ x: 440, y: 280 }, 	{ x: 430, y: 270 }, 	{ x: 340, y: 180 }, 	{ x: 330, y: 160 }, 	{ x: 330, y: 140 }, 	{ x: 340, y: 120 }, 	{ x: 360, y: 110 }, 	{ x: 400, y: 100 }, 	{ x: 410, y: 110 }, 	{ x: 400, y: 130 }, 	{ x: 390, y: 160 }, 	{ x: 400, y: 170 }, 	{ x: 420, y: 170 }, 	{ x: 440, y: 130 }, 	{ x: 460, y: 120 }, 	{ x: 480, y: 120 }, 	{ x: 490, y: 130 }, 	{ x: 480, y: 150 }, 	{ x: 460, y: 170 }, 	{ x: 450, y: 190 }, 	{ x: 450, y: 210 }, 	{ x: 460, y: 230 }, 	{ x: 510, y: 280 }, 	{ x: 520, y: 290 }, 	{ x: 530, y: 280 }, 	{ x: 550, y: 240 }, 	{ x: 550, y: 210 }, 	{ x: 540, y: 160 }, 	{ x: 520, y: 120 }, 	{ x: 490, y: 90 }, 	{ x: 410, y: 70 }, 	{ x: 390, y: 70 }, 	{ x: 370, y: 70 }, 	{ x: 350, y: 80 }, 	{ x: 290, y: 100 }],
        "GP de Las Vegas": [{ x: 500, y: 130 }, 	{ x: 480, y: 90 }, 	{ x: 470, y: 80 }, 	{ x: 460, y: 90 }, 	{ x: 470, y: 120 }, 	{ x: 470, y: 140 }, 	{ x: 460, y: 150 }, 	{ x: 290, y: 160 }, 	{ x: 280, y: 150 }, 	{ x: 280, y: 100 }, 	{ x: 270, y: 80 }, 	{ x: 260, y: 70 }, 	{ x: 250, y: 70 }, 	{ x: 250, y: 90 }, 	{ x: 240, y: 100 }, 	{ x: 210, y: 70 }, 	{ x: 210, y: 170 }, 	{ x: 210, y: 190 }, 	{ x: 200, y: 200 }, 	{ x: 160, y: 230 }, 	{ x: 140, y: 280 }, 	{ x: 150, y: 280 }, 	{ x: 200, y: 320 }, 	{ x: 250, y: 350 }, 	{ x: 270, y: 360 }, 	{ x: 490, y: 360 }, 	{ x: 500, y: 350 }, 	{ x: 500, y: 330 }, 	{ x: 520, y: 320 }, 	{ x: 520, y: 160 }, 	{ x: 510, y: 140 }, 	{ x: 500, y: 130 }],
        "GP do Catar (Lusail)": [{ x: 400, y: 370 }, 	{ x: 240, y: 370 }, 	{ x: 220, y: 360 }, 	{ x: 220, y: 340 }, 	{ x: 230, y: 320 }, 	{ x: 270, y: 300 }, 	{ x: 280, y: 290 }, 	{ x: 280, y: 270 }, 	{ x: 270, y: 260 }, 	{ x: 230, y: 250 }, 	{ x: 220, y: 240 }, 	{ x: 190, y: 130 }, 	{ x: 190, y: 120 }, 	{ x: 200, y: 110 }, 	{ x: 230, y: 100 }, 	{ x: 240, y: 110 }, 	{ x: 270, y: 180 }, 	{ x: 280, y: 180 }, 	{ x: 290, y: 170 }, 	{ x: 300, y: 80 }, 	{ x: 310, y: 70 }, 	{ x: 320, y: 70 }, 	{ x: 330, y: 80 }, 	{ x: 330, y: 110 }, 	{ x: 340, y: 130 }, 	{ x: 350, y: 140 }, 	{ x: 370, y: 150 }, 	{ x: 370, y: 160 }, 	{ x: 360, y: 200 }, 	{ x: 360, y: 220 }, 	{ x: 380, y: 230 }, 	{ x: 410, y: 220 }, 	{ x: 450, y: 180 }, 	{ x: 460, y: 140 }, 	{ x: 470, y: 100 }, 	{ x: 480, y: 80 }, 	{ x: 530, y: 80 }, 	{ x: 540, y: 90 }, 	{ x: 560, y: 130 }, 	{ x: 570, y: 140 }, 	{ x: 560, y: 150 }, 	{ x: 510, y: 210 }, 	{ x: 500, y: 220 }, 	{ x: 510, y: 240 }, 	{ x: 570, y: 330 }, 	{ x: 580, y: 350 }, 	{ x: 570, y: 360 }, 	{ x: 550, y: 370 }, 	{ x: 400, y: 370 }],
        "GP de Abu Dhabi (Yas Marina)": [{ x: 360, y: 190 }, 	{ x: 360, y: 350 }, 	{ x: 370, y: 360 }, 	{ x: 420, y: 360 }, 	{ x: 430, y: 350 }, 	{ x: 440, y: 320 }, 	{ x: 450, y: 300 }, 	{ x: 470, y: 290 }, 	{ x: 490, y: 300 }, 	{ x: 520, y: 320 }, 	{ x: 540, y: 330 }, 	{ x: 610, y: 330 }, 	{ x: 630, y: 320 }, 	{ x: 630, y: 310 }, 	{ x: 620, y: 290 }, 	{ x: 330, y: 80 }, 	{ x: 330, y: 120 }, 	{ x: 300, y: 120 }, 	{ x: 270, y: 130 }, 	{ x: 240, y: 160 }, 	{ x: 170, y: 240 }, 	{ x: 130, y: 320 }, 	{ x: 120, y: 340 }, 	{ x: 120, y: 360 }, 	{ x: 130, y: 370 }, 	{ x: 150, y: 380 }, 	{ x: 170, y: 370 }, 	{ x: 180, y: 340 }, 	{ x: 180, y: 280 }, 	{ x: 190, y: 260 }, 	{ x: 210, y: 230 }, 	{ x: 240, y: 230 }, 	{ x: 250, y: 240 }, 	{ x: 250, y: 270 }, 	{ x: 260, y: 280 }, 	{ x: 280, y: 290 }, 	{ x: 290, y: 280 }, 	{ x: 290, y: 180 }, 	{ x: 300, y: 160 }, 	{ x: 340, y: 140 }, 	{ x: 350, y: 140 }, 	{ x: 360, y: 150 }, 	{ x: 360, y: 190 }]

    };

    const pneus = {
        macio: { nome: 'Macio', multiplicadorPerformance: 1.35, desgastePorVolta: 4.8, duracaoIdeal: 0.30 }, // Dura aprox. 33% da corrida
        medio: { nome: 'Médio', multiplicadorPerformance: 1.0, desgastePorVolta: 2.6, duracaoIdeal: 0.50 }, // Dura aprox. 50% da corrida
        duro: { nome: 'Duro', multiplicadorPerformance: 0.98, desgastePorVolta: 1.75, duracaoIdeal: 0.67 }  // Dura aprox. 67% da corrida
    };
    const pontosPorPosicao = { 1: 25, 2: 18, 3: 15, 4: 12, 5: 10, 6: 8, 7: 6, 8: 4, 9: 2, 10: 1 };

    const especialistaHabilidades = {
        "Aerodinamicista": ["Asa Dianteira", "Asa Traseira"],
        "Engenheiro de Motor": ["Motor"],
        "Projetista": ["Suspensão", "Chassi"],
    };
    const marcasPatrocinadores = [
        { nome: "Heuer", tipo: "Relógios de Luxo", reputacaoMin: 0 }, { nome: "Petrobras", tipo: "Combustíveis", reputacaoMin: 0 }, { nome: "Santander", tipo: "Banco", reputacaoMin: 1 }, { nome: "Pirelli", tipo: "Pneus", reputacaoMin: 1 }, { nome: "Rolex", tipo: "Relógios de Luxo", reputacaoMin: 2 }, { nome: "Amazon AWS", tipo: "Tecnologia", reputacaoMin: 4 }, { nome: "Red Bull", tipo: "Bebidas Energéticas", reputacaoMin: 3 }, { nome: "Louis Vuitton", tipo: "Artigos de Luxo", reputacaoMin: 4 }, { nome: "Brahma", tipo: "Cerveja", reputacaoMin: 3 }, { nome: "Geodados WebSystem", tipo: "Sistemas de Informação", reputacaoMin: 1 }, { nome: "Geodados Geoprocessamento", tipo: "Geoprocessamento", reputacaoMin: 5 }, { nome: "Pitu", tipo: "Alimentos", reputacaoMin: 5 }, { nome: "Heineken", tipo: "Cerveja", reputacaoMin: 4 }, { nome: "Mercado Livre", tipo: "Comércio", reputacaoMin: 2 }, { nome: "Shopee", tipo: "Comércio", reputacaoMin: 0 }, { nome: "Shen", tipo: "Comércio", reputacaoMin: 1 }, { nome: "Colorado Beer", tipo: "cerveja", reputacaoMin: 0 }, { nome: "Tibia", tipo: "Jogo Eletrônico", reputacaoMin: 3 }, { nome: "League of Legends", tipo: "Jogo Eletrônico", reputacaoMin: 1 }, { nome: "Forza", tipo: "Jogo Eletrônico", reputacaoMin: 6 }, { nome: "Jardim Paraiso fest", tipo: "Comércio", reputacaoMin: 0 }, { nome: "H2 Games", tipo: "Comércio", reputacaoMin: 0 }, { nome: "Esfirras do Bairro", tipo: "Alimenticios", reputacaoMin: 1 }, { nome: "Pizzas BR", tipo: "Alimenticios", reputacaoMin: 0 }, { nome: "Petrobras Gás", tipo: "Comércio", reputacaoMin: 1 }, { nome: "Shell", tipo: "Combustível", reputacaoMin: 1 },
    ];
    const baseDePilotos = [
        { id: 1, nome: "Max Verstappen", idade: 27, habilidade: 93, consistencia: 95, gerenciamentoPneus: 89, atributosBase: { habilidade: 93, consistencia: 95, gerenciamentoPneus: 89 }, status: 'Red Bull' },
        { id: 2, nome: "Yuki Tsunoda", idade: 23, habilidade: 88, consistencia: 85, gerenciamentoPneus: 88, atributosBase: { habilidade: 88, consistencia: 85, gerenciamentoPneus: 88 }, status: 'Red Bull' },
        { id: 3, nome: "Lewis Hamilton", idade: 40, habilidade: 93, consistencia: 91, gerenciamentoPneus: 90, atributosBase: { habilidade: 93, consistencia: 91, gerenciamentoPneus: 90 }, status: 'Ferrari' },
        { id: 5, nome: "Charles Leclerc", idade: 27, habilidade: 91, consistencia: 90, gerenciamentoPneus: 94, atributosBase: { habilidade: 91, consistencia: 90, gerenciamentoPneus: 84 }, status: 'Ferrari' },
        { id: 4, nome: "George Russell", idade: 27, habilidade: 90, consistencia: 88, gerenciamentoPneus: 89, atributosBase: { habilidade: 90, consistencia: 88, gerenciamentoPneus: 89 }, status: 'Mercedes' },
        { id: 17, nome: "K. Antonelli", idade: 18, habilidade: 88, consistencia: 86, gerenciamentoPneus: 84, atributosBase: { habilidade: 88, consistencia: 86, gerenciamentoPneus: 84 }, status: 'Mercedes' },
        { id: 6, nome: "Carlos Sainz", idade: 30, habilidade: 90, consistencia: 90, gerenciamentoPneus: 88, atributosBase: { habilidade: 90, consistencia: 90, gerenciamentoPneus: 88 }, status: 'Wilians' },
        { id: 18, nome: "Alex Albon", idade: 29, habilidade: 86, consistencia: 89, gerenciamentoPneus: 89, atributosBase: { habilidade: 86, consistencia: 89, gerenciamentoPneus: 89 }, status: 'Wilians' },
        { id: 8, nome: "G. Bortoleto", idade: 20, habilidade: 89, consistencia: 89, gerenciamentoPneus: 86, atributosBase: { habilidade: 89, consistencia: 89, gerenciamentoPneus: 86 }, status: 'Sauber' },
        { id: 7, nome: "Nico Hulkenberg", idade: 37, habilidade: 89, consistencia: 88, gerenciamentoPneus: 86, atributosBase: { habilidade: 89, consistencia: 88, gerenciamentoPneus: 86 }, status: 'Sauber' },
        { id: 9, nome: "Fernando Alonso", idade: 43, habilidade: 92, consistencia: 91, gerenciamentoPneus: 96, atributosBase: { habilidade: 92, consistencia: 91, gerenciamentoPneus: 96 }, status: 'Aston Martin' },
        { id: 10, nome: "Lance Stroll", idade: 26, habilidade: 83, consistencia: 78, gerenciamentoPneus: 82, atributosBase: { habilidade: 83, consistencia: 78, gerenciamentoPneus: 82 }, status: 'Aston Martin' },
        { id: 11, nome: "Pierre Gasly", idade: 29, habilidade: 82, consistencia: 86, gerenciamentoPneus: 87, atributosBase: { habilidade: 82, consistencia: 86, gerenciamentoPneus: 87 }, status: 'Alpine' },
        { id: 12, nome: "F. Colapinto", idade: 22, habilidade: 80, consistencia: 80, gerenciamentoPneus: 80, atributosBase: { habilidade: 80, consistencia: 80, gerenciamentoPneus: 80 }, status: 'Alpine' },
        { id: 13, nome: "Esteban Ocon", idade: 28, habilidade: 85, consistencia: 87, gerenciamentoPneus: 86, atributosBase: { habilidade: 85, consistencia: 87, gerenciamentoPneus: 86 }, status: 'Haas' },
        { id: 14, nome: "Oliver Bearman", idade: 20, habilidade: 85, consistencia: 81, gerenciamentoPneus: 82, atributosBase: { habilidade: 85, consistencia: 81, gerenciamentoPneus: 82 }, status: 'Haas' },
        { id: 15, nome: "Isack Hadjar", idade: 20, habilidade: 88, consistencia: 82, gerenciamentoPneus: 83, atributosBase: { habilidade: 88, consistencia: 82, gerenciamentoPneus: 83 }, status: 'RB' },
        { id: 16, nome: "Liam Lawson", idade: 23, habilidade: 81, consistencia: 84, gerenciamentoPneus: 85, atributosBase: { habilidade: 81, consistencia: 84, gerenciamentoPneus: 85 }, status: 'RB' },
        { id: 19, nome: "Oscar Piastri", idade: 24, habilidade: 92, consistencia: 91, gerenciamentoPneus: 85, atributosBase: { habilidade: 92, consistencia: 91, gerenciamentoPneus: 85 }, status: 'MacLaren' },
        { id: 20, nome: "Lando Norris", idade: 25, habilidade: 92, consistencia: 90, gerenciamentoPneus: 87, atributosBase: { habilidade: 92, consistencia: 90, gerenciamentoPneus: 87 }, status: 'MacLaren' },

        { id: 101, nome: "Lucas di Grassi", idade: 33, habilidade: 91, consistencia: 90, gerenciamentoPneus: 92, atributosBase: { habilidade: 91, consistencia: 90, gerenciamentoPneus: 92 },salario: 14000, precoContrato: 1200000, status: 'Disponível' },
        { id: 102, nome: "Felipe Drugovich", idade: 19, habilidade: 87, consistencia: 87, gerenciamentoPneus: 89, salario: 17000, precoContrato: 999000, status: 'Disponível' },
        { id: 122, nome: "Dudu Barrichello", idade: 21, habilidade: 88, consistencia: 90, gerenciamentoPneus: 91, salario: 15000, precoContrato: 210000, status: 'Disponível' },
        { id: 123, nome: "F. Barrichello", idade: 17, habilidade: 88, consistencia: 89, gerenciamentoPneus: 90, salario: 15000, precoContrato: 210000, status: 'Disponível' },
        { id: 103, nome: "Pietro Fittipaldi", idade: 18, habilidade: 72, consistencia: 88, gerenciamentoPneus: 85, salario: 15000, precoContrato: 550000, status: 'Disponível' },
        { id: 104, nome: "Enzo Fittipaldi", idade: 17,habilidade: 66, consistencia: 82, gerenciamentoPneus: 84, salario: 16000, precoContrato: 100000, status: 'Disponível' },
        { id: 105, nome: "Caio Collet", idade: 20, habilidade: 87, consistencia: 89, gerenciamentoPneus: 87, salario: 17000, precoContrato: 780000, status: 'Disponível' },
        { id: 105, nome: "Bueno Filho", idade: 25, habilidade: 89, consistencia: 86, gerenciamentoPneus: 87, salario: 17000, precoContrato: 780000, status: 'Disponível' },
        { id: 106, nome: "Roberty Moreno", idade: 22, habilidade: 80, consistencia: 95, gerenciamentoPneus: 88, salario: 18000, precoContrato: 750000, status: 'Disponível' },
        { id: 107, nome: "Nonato André", idade: 21, habilidade: 75, consistencia: 79, gerenciamentoPneus: 79, salario: 14000, precoContrato: 500000, status: 'Disponível' },
        { id: 108, nome: "Brian EUA", idade: 30, habilidade: 89, consistencia: 88, gerenciamentoPneus: 91, salario: 13500, precoContrato: 480000, status: 'Disponível' },
        { id: 109, nome: "Leonardo Fornaroli", idade: 28, habilidade: 88, consistencia: 88, gerenciamentoPneus: 79, salario: 13500, precoContrato: 480000, status: 'Disponível' },
        { id: 110, nome: "Roman Staněk", idade: 23, habilidade: 87, consistencia: 90, gerenciamentoPneus: 85, salario: 13500, precoContrato: 480000, status: 'Disponível' },
        { id: 111, nome: "Roberto Moreno", idade: 24, habilidade: 85, consistencia: 89, gerenciamentoPneus: 91, salario: 14000, precoContrato: 550000, status: 'Disponível' },
        { id: 112, nome: "Pepe Martí", idade: 25, habilidade: 88, consistencia: 80, gerenciamentoPneus: 88, salario: 16000, precoContrato: 650000, status: 'Disponível' },
        { id: 113, nome: "Oliver Goethe", idade: 26, habilidade: 91, consistencia: 85, gerenciamentoPneus: 84, salario: 14000, precoContrato: 550000, status: 'Disponível' },
        { id: 114, nome: "Richard Verschoo", idade: 19, habilidade: 78, consistencia: 85, gerenciamentoPneus: 88, salario: 15000, precoContrato: 350000, status: 'Disponível' },
        { id: 115, nome: "Luke Browning", idade: 24, habilidade: 90, consistencia: 75, gerenciamentoPneus: 88, salario: 14000, precoContrato: 250000, status: 'Disponível' },
        { id: 116, nome: "Dino Beganovic", idade: 25, habilidade: 82, consistencia: 85, gerenciamentoPneus: 78, salario: 15000, precoContrato: 350000, status: 'Disponível' },
        { id: 117, nome: "Gabriele Minì", idade: 38, habilidade: 90, consistencia: 92, gerenciamentoPneus: 91, salario: 16000, precoContrato: 250000, status: 'Disponível' },
        { id: 118, nome: "Jak Crawford", idade: 24, habilidade: 88, consistencia: 82, gerenciamentoPneus: 85, salario: 11000, precoContrato: 350000, status: 'Disponível' },
        { id: 119, nome: "Amaury Cordeel", idade: 25, habilidade: 85, consistencia: 88, gerenciamentoPneus: 82, salario: 13000, precoContrato: 250000, status: 'Disponível' },
        { id: 120, nome: "Cian Shields", idade: 26, habilidade: 86, consistencia: 85, gerenciamentoPneus: 78, salario: 12000, precoContrato: 350000, status: 'Disponível' },
        { id: 121, nome: "Sami Meguetounif", idade: 16, habilidade: 85, consistencia: 85, gerenciamentoPneus: 90, salario: 14000, precoContrato: 210000, status: 'Disponível' },
    ];
    const equipesIA = [
        { nome: "MacLaren", cor: "rgb(255,135,0)", piloto1Id: 19, piloto2Id: 20, carro: { potencia: 93, aerodinamica: 91, aderencia: 95, confiabilidade: 90 } },
        { nome: "Red Bull", cor: "rgb(30,65,255)", piloto1Id: 1, piloto2Id: 2, carro: { potencia: 92, aerodinamica: 92, aderencia: 94, confiabilidade: 89 } },
        { nome: "Mercedes", cor: "rgb(0,210,190)", piloto1Id: 17, piloto2Id: 4, carro: { potencia: 89, aerodinamica: 89, aderencia: 89, confiabilidade: 86 } },
        { nome: "Ferrari", cor: "rgb(220,0,0)", piloto1Id: 5, piloto2Id: 3, carro: { potencia: 91, aerodinamica: 93, aderencia: 91, confiabilidade: 88 } },
        { nome: "Wilians", cor: "rgb(90,165,255)", piloto1Id: 6, piloto2Id: 18, carro: { potencia: 88, aerodinamica: 87, aderencia: 89, confiabilidade: 85 } },
        { nome: "Sauber", cor: "rgb(82,226,82)", piloto1Id: 7, piloto2Id: 8, carro: { potencia: 85, aerodinamica: 85, aderencia: 82, confiabilidade: 85 } },
        { nome: "Aston Martin", cor: "rgb(0,111,98)", piloto1Id: 9, piloto2Id: 10, carro: { potencia: 85, aerodinamica: 85, aderencia: 82, confiabilidade: 85 } },
        { nome: "Alpine", cor: "rgb(255,192,203)", piloto1Id: 11, piloto2Id: 12, carro: { potencia: 84, aerodinamica: 86, aderencia: 85, confiabilidade: 84 } },
        { nome: "Haas", cor: "rgb(79,79,79)", piloto1Id: 13, piloto2Id: 14, carro: { potencia: 84, aerodinamica: 86, aderencia: 87, confiabilidade: 84 } },
        { nome: "RB", cor: "rgb(255,250,240)", piloto1Id: 15, piloto2Id: 16, carro: { potencia: 87, aerodinamica: 86, aderencia: 85, confiabilidade: 83 } },


    ];

    // EM script.js, no topo com os dados globais
    const catalogoMensagens = {
        ataque_pneu_bom: [
            { remetente: 'Piloto', texto: "O carro está ótimo, estou indo pra cima!" },
            { remetente: 'Engenheiro', texto: "Isso! Continue pressionando, o ritmo está excelente." },
            { remetente: 'Piloto', texto: "Meu ERS está ajudando muito!" },
            { remetente: 'Engenheiro', texto: "Gerencie seu ERS. Ele está ajudando muito nas retas." },
            { remetente: 'Piloto', texto: "Estou indo pra cima! Estou confiante." },
            { remetente: 'Engenheiro', texto: "Isso! Excelente." },
            { remetente: 'Piloto', texto: "Estamos bem, os pneus estão respondendo bem!" },
            { remetente: 'Engenheiro', texto: "Excelente!" },
            { remetente: 'Piloto', texto: "Os pneus estão me surpreendendo!" },
            { remetente: 'Engenheiro', texto: "Nossa estratégia é boa!" },
            { remetente: 'Piloto', texto: "Acho que temos uma chance" },
            { remetente: 'Engenheiro', texto: "Go! Go! Go!"}
        ],
        lidercorrida: [
            { remetente: 'Piloto', texto: "Acho que consigo segurar a vantagem!" },
            { remetente: 'Engenheiro', texto: "Não Alivie, o ritmo está bom." },
            { remetente: 'Engenheiro', texto: "Hoje será GG!" },
            { remetente: 'Piloto', texto: "Estamos na frente, vamos manter a estratégia?" },
            { remetente: 'Engenheiro', texto: "Estamos no lugar certo, continue!" }
        ],
        lidercorrida_perigo: [
            { remetente: 'Piloto', texto: "Acho que não consigo segurar a vantagem!" },
            { remetente: 'Engenheiro', texto: "Não Alivie, matenha o rítmo." },
            { remetente: 'Piloto', texto: "Está difícil segurar!!" },
            { remetente: 'Engenheiro', texto: "Calma! Aguente firme!!" }
        ],
        ataque_pneu_ruim: [
            { remetente: 'Piloto', texto: "Meus pneus estão esfarelando! Não sei quanto tempo mais aguentam." },
            { remetente: 'Engenheiro', texto: "Entendido. Alivie o ritmo ou teremos que antecipar o pit stop." },
            { remetente: 'Piloto', texto: "Ja eram os pneus! Estou escorregando muito!!" },
            { remetente: 'Engenheiro', texto: "Entendido. Alivie o ritmo!" }
        ],
        conservar_pneu_bom: [
            { remetente: 'Piloto', texto: "Pneus estão bons, acho que podemos pressionar mais se precisar." },
            { remetente: 'Engenheiro', texto: "Copiado. Mantenha assim, a estratégia está funcionando." },
            { remetente: 'Piloto', texto: "Como estamos de estratégia?" },
            { remetente: 'Engenheiro', texto: "Mantenha assim, estamos bem." }
        ],
        conservar_pneu_ruim: [
            { remetente: 'Piloto', texto: "Estou só gerenciando o desgaste agora." },
            { remetente: 'Engenheiro', texto: "Bom trabalho. Continue gerenciando, estamos estendendo o stint." },
            { remetente: 'Piloto', texto: "Esses Stint longos acabam comigo." },
            { remetente: 'Engenheiro', texto: "Entendido. Continue gerenciando." }
        ],
        pit_stop_proximo: [
            { remetente: 'Engenheiro', texto: "Box, box, box! Confirme." },
            { remetente: 'Piloto', texto: "Entendido, estou indo para os boxes." },
            { remetente: 'Engenheiro', texto: "melhor fazer um pit stop agora! Confirme." },
            { remetente: 'Piloto', texto: "Entendido!!" }
        ],
        gap_pequeno: [
        { remetente: 'Engenheiro', texto: "Ok, você está na zona de DRS. Pode atacar na próxima reta!" },
        { remetente: 'Engenheiro', texto: "Você está colado nele! Prepare o bote, pressione agora!" },
        { remetente: 'Engenheiro', texto: "Aproveita agora! Você ta muito perto" },
        { remetente: 'Engenheiro', texto: "Ataque, aproveite o DRS" },
        { remetente: 'Piloto', texto: "Estou mais rápido, só preciso de uma oportunidade para passar." },
        { remetente: 'Piloto', texto: "Ele está se defendendo bem, mas eu vou conseguir." },
        { remetente: 'Piloto', texto: "Estou no vácuo, vou forçar tudo!" },
        { remetente: 'Piloto', texto: "Estou mais veloz!" },
        { remetente: 'Piloto', texto: "Vou para o tudo ou nada!" },
    ]
    };

    const catalogoInstalacoes = {
        simulador: {
            nome: "Simulador de Pilotos",
            descricao: "Tecnologia de ponta para acelerar o desenvolvimento e a adaptação dos seus pilotos.",
            bonusPorNivel: "+5% de bônus na evolução de pilotos",
            custos: [0, 5000000, 20000000, 35000000] // Custo para Nível 1, 2 e 3
        },
        tunelDeVento: {
            nome: "Túnel de Vento",
            descricao: "Uma instalação crucial para o desenvolvimento e teste de peças aerodinâmicas.",
            bonusPorNivel: "-10% no custo de projetos aerodinâmicos",
            custos: [0, 4000000, 18000000, 30000000]
        },
        treinoDeBox: {
            nome: "Centro de Treinamento da Equipe de Box",
            descricao: "Equipamentos e treinamento especializado para tornar sua equipe de pit stop a mais rápida do grid.",
            bonusPorNivel: "-0.5s no tempo de pit stop",
            custos: [0, 5000000, 18000000, 30000000]
        },
        marketing: {
            nome: "Departamento de Marketing e Hospitalidade",
            descricao: "Estrutura para receber patrocinadores e promover a marca da equipe globalmente.",
            bonusPorNivel: "+ chance de melhores patrocínios e vendas",
            custos: [0, 2000000, 5000000, 10000000]
        },
        ers: { // <-- NOVO
            nome: "Centro de Otimização de ERS",
            descricao: "Melhora a potência da bateria ERS quando ativada, garantindo um bônus de desempenho maior.",
            bonusPorNivel: "+ bônus de tempo por volta com ERS ativo",
            custos: [0, 0, 17500000, 50000000] // Nível 1 é padrão, Nível 2 e 3 são compráveis
        }
    };

    const catalogoMarketing = {
        'Chaveiro': { nome: 'Chaveiro', img: 'img/marketing/chaveiro.png', custo_desbloqueio: 0, custo_producao: 3, preco_venda_minimo: 5 },
        'Bonés': { nome: 'Bonés', img: 'img/marketing/bones.png', custo_desbloqueio: 1000000, custo_producao: 15, preco_venda_minimo: 30 },
        'Camisa': { nome: 'Camisa', img: 'img/marketing/camisa.png', custo_desbloqueio: 5000000, custo_producao: 50, preco_venda_minimo: 75 },
        'Carro em miniatura': { nome: 'Carro em miniatura', img: 'img/marketing/miniatura.png', custo_desbloqueio: 10000000, custo_producao: 80, preco_venda_minimo: 150 },
        'Anel com joia': { nome: 'Anel com joia', img: 'img/marketing/anel.png', custo_desbloqueio: 15000000, custo_producao: 100000, preco_venda_minimo: 300000 }
    };

    const carIcon = new Image(); carIcon.src = 'img/carf1.png';
    const DESIGN_WIDTH = 800;
    const DESIGN_HEIGHT = 450;
    const btnSalvar = document.getElementById('btn-salvar-nome');
    const btnFalencia = document.getElementById('btn-falencia');


    // --- 2. ESTADO DO JOGO ---
    let gameState = {};
    let animacaoAtiva = false;
    let garagemState = { carroSelecionadoIndex: 0 };
    let raceData = {};
    let sortState = { column: 'preco', direction: 'asc' };
    let projetoAtual = {};
    let gapsAnteriores = {};




    function resetGameState() {
        const pilotosDoJogo = JSON.parse(JSON.stringify(baseDePilotos));
        equipesIA.forEach(equipe => {
            const piloto1 = pilotosDoJogo.find(p => p.id === equipe.piloto1Id);
            if (piloto1) piloto1.status = equipe.nome;
            const piloto2 = pilotosDoJogo.find(p => p.id === equipe.piloto2Id);
            if (piloto2) piloto2.status = equipe.nome;
        });
        const pilotosDeMercado = pilotosDoJogo.filter(p => p.status === 'Disponível');
        let piloto1Jogador = null;
        let piloto2Jogador = null;
        if (pilotosDeMercado.length >= 2) {
            piloto1Jogador = pilotosDeMercado[0];
            piloto1Jogador.status = 'Jogador';
            piloto2Jogador = pilotosDeMercado[1];
            piloto2Jogador.status = 'Jogador';
        }
        atualizarMercadoDePilotos(pilotosDoJogo);

        gameState = {
            escuderia: { nome: "Equipe Novata", cor: "rgb(255,255,0)", dinheiro: 1500000, especialistas: [], emblema: {
                forma: 'circle.svg', // Nome do arquivo padrão
                corForma: '#ff0000',
                icone: 'asterik.svg',     // Nome do arquivo padrão
                corIcone: '#030303',
                escalaIcone: 0.7,
                iconeNaFrente: true,
                corFundo: '#f0f2f5'
                }
            },
            campeonato: { ano: 2025, corridaAtualIndex: 0, resultadosCorridas: [], classificacaoPilotos: [], classificacaoConstrutores: [] },
            projetosEmAndamento: [],
            patrocinio: { ofertas: [], ativos: [] },
            historicoAutodromos: {},
            // --- INÍCIO DA MODIFICAÇÃO ---

            galeria: { titulosConstrutores: 0, titulosPilotos: 0, hallDaFama: [], estatisticasPilotos: {} },
            instalacoes: { // ADICIONE ESTE BLOCO
                simulador: 0,
                tunelDeVento: 0,
                treinoDeBox: 0,
                marketing: 0,
                ers: 1
            },
            marketing: {
                'Chaveiro': { desbloqueado: true, inventario: 0, preco_venda_definido: 5, posicaoIcone: { top: 25, left: 25 }, tamanhoIcone: { width: 50, height: 50 } },
                'Bonés': { desbloqueado: false, inventario: 0, preco_venda_definido: 30, posicaoIcone: { top: 25, left: 25 }, tamanhoIcone: { width: 50, height: 50 } },
                'Camisa': { desbloqueado: false, inventario: 0, preco_venda_definido: 75, posicaoIcone: { top: 25, left: 25 }, tamanhoIcone: { width: 50, height: 50 } },
                'Carro em miniatura': { desbloqueado: false, inventario: 0, preco_venda_definido: 150, posicaoIcone: { top: 25, left: 25 }, tamanhoIcone: { width: 50, height: 50 } },
                'Anel com joia': { desbloqueado: false, inventario: 0, preco_venda_definido: 300000, posicaoIcone: { top: 25, left: 25 }, tamanhoIcone: { width: 50, height: 50 } },
            },
            // --- FIM DA MODIFICAÇÃO ---
            pilotos: pilotosDoJogo,
            todasAsPecas: [
                { ...catalogoDePecas[14], instanceId: Date.now() + 1 }, { ...catalogoDePecas[6], instanceId: Date.now() + 2 },
                { ...catalogoDePecas[11], instanceId: Date.now() + 3 }, { ...catalogoDePecas[11], instanceId: Date.now() + 4 },
                { ...catalogoDePecas[20], instanceId: Date.now() + 5 }, { ...catalogoDePecas[20], instanceId: Date.now() + 6 },
                { ...catalogoDePecas[73], instanceId: Date.now() + 7 }, { ...catalogoDePecas[73], instanceId: Date.now() + 8 },
                { ...catalogoDePecas[29], instanceId: Date.now() + 9 }, { ...catalogoDePecas[4], instanceId: Date.now() + 10 }
            ].map(peca => ({
                ...peca,
                corridasUsadas: 0,
                atributosOriginais: JSON.parse(JSON.stringify(peca.atributos))
            })),
            mercadoDePecas: [],
            carros: [
                { id: 1, pilotoId: piloto1Jogador ? piloto1Jogador.id : null, pecas: { motor: null, chassi: null, asaDianteira: null, asaTraseira: null, suspensao: null }, estrategia: { pneuInicial: 'medio', paradas: [{ pararNaVolta: 26, colocarPneu: 'duro' }] } },
                { id: 2, pilotoId: piloto2Jogador ? piloto2Jogador.id : null, pecas: { motor: null, chassi: null, asaDianteira: null, asaTraseira: null, suspensao: null }, estrategia: { pneuInicial: 'medio', paradas: [{ pararNaVolta: 27, colocarPneu: 'duro' }] } }
            ]
        };
    }

    const saveGame = () => localStorage.setItem('f1ManagerSave', JSON.stringify(gameState));

    const loadGame = () => {
        const savedGame = localStorage.getItem('f1ManagerSave');
        if (savedGame) {
            try {
                gameState = JSON.parse(savedGame);

                if (!gameState.pilotos || !Array.isArray(gameState.pilotos) || !gameState.pilotos[0] || !gameState.pilotos[0].atributosBase) {
                    console.log("Save antigo ou corrompido detectado. Iniciando novo jogo.");
                    resetGameState();
                    alert("Seu jogo salvo era de uma versão antiga ou incompatível. Um novo jogo foi iniciado.");
                    return;
                }
                if (!gameState.historicoAutodromos) gameState.historicoAutodromos = {};
                if (!gameState.galeria) gameState.galeria = { titulosConstrutores: 0, titulosPilotos: 0, hallDaFama: [] };

                gameState.pilotos = gameState.pilotos.filter(p => p !== null && typeof p === 'object');
                gameState.pilotos.forEach(piloto => {
                    if (piloto.idade == null) piloto.idade = 28;
                    if (piloto.salario == null) piloto.salario = 50000;
                    if (piloto.precoContrato == null) piloto.precoContrato = 500000;
                    if (!piloto.atributosBase) {
                        piloto.atributosBase = { habilidade: piloto.habilidade, consistencia: piloto.consistencia, gerenciamentoPneus: piloto.gerenciamentoPneus };
                    }
                });
                gameState.carros.forEach(carro => { // <-- ALTERADO
                    if (carro.pilotoId) {
                        if (!gameState.pilotos.some(p => p.id === carro.pilotoId)) carro.pilotoId = null;
                    }
                    // Adiciona o sistema ERS a saves antigos
                    if (!carro.ers) {
                        carro.ers = { bateria: 0, voltasParaCarregar: 0, cicloDeCarregamento: 0, ativo: false };
                    }
                });
                if (!gameState.patrocinio) gameState.patrocinio = { ofertas: [], ativos: [] };
                if (!gameState.projetosEmAndamento) gameState.projetosEmAndamento = [];

                if (!gameState.escuderia.emblema) {
                    console.log("Migrando save antigo: Adicionando dados de emblema padrão.");
                    gameState.escuderia.emblema = {
                        forma: 'circle.svg',
                        corForma: '#ff0000',
                        icone: 'asterik.svg',
                        corIcone: '#030303',
                        escalaIcone: 0.7,
                        iconeNaFrente: true,
                        corFundo: '#f0f2f5'


                    };
                    if (gameState.escuderia.emblema.iconeNaFrente === undefined) {
                        gameState.escuderia.emblema.iconeNaFrente = true;
                        gameState.escuderia.emblema.corFundo = '#f0f2f5';
                    }
                }
                if (!gameState.marketing) {
                    console.log("Migrando save antigo: Adicionando dados de Marketing padrão.");
                    gameState.marketing = {
                        'Chaveiro': { desbloqueado: true, inventario: 0, preco_venda_definido: 5 },
                        'Bonés': { desbloqueado: false, inventario: 0, preco_venda_definido: 30 },
                        'Camisa': { desbloqueado: false, inventario: 0, preco_venda_definido: 75 },
                        'Carro em miniatura': { desbloqueado: false, inventario: 0, preco_venda_definido: 150 },
                        'Anel com joia': { desbloqueado: false, inventario: 0, preco_venda_definido: 300000 },
                    };
                }
                if (!gameState.instalacoes) { // <-- ALTERADO
                    gameState.instalacoes = { simulador: 0, tunelDeVento: 0, treinoDeBox: 0, marketing: 0, ers: 1 };
                }
                // Adiciona a instalação ERS a saves antigos
                if (gameState.instalacoes.ers === undefined) {
                    gameState.instalacoes.ers = 1;
                }


                for (const key in gameState.marketing) {
                    if (typeof gameState.marketing[key].posicaoIcone === 'undefined') {
                        gameState.marketing[key].posicaoIcone = { top: 25, left: 25 };
                    }
                    if (typeof gameState.marketing[key].tamanhoIcone === 'undefined') {
                        gameState.marketing[key].tamanhoIcone = { width: 50, height: 50 };
                    }
                }

            } catch (error) {
                console.error("Erro ao carregar ou migrar o save game. Iniciando um novo jogo.", error);
                resetGameState();
            }
        } else {
            resetGameState();
            gerarMercado();
        }
    };


    function getCorDaEquipe(nomeEquipe) {
        if (nomeEquipe === gameState.escuderia.nome) {
            return gameState.escuderia.cor;
        }
        const equipeIA = equipesIA.find(e => e.nome === nomeEquipe);
        if (equipeIA) {
            return equipeIA.cor;
        }
        return '#6c757d';
    }


    // --- 3. LÓGICA DO JOGO (CORE) ---

    function declararFalencia() {
        if (confirm("Tem certeza que deseja declarar falência?\n\nTODO O SEU PROGRESSO SERÁ PERDIDO e o jogo será reiniciado!")) {
            // Limpa o save do localStorage
            localStorage.removeItem('f1ManagerSave');

            // loadGame agora irá acionar um reset porque o arquivo de save não existe mais
            loadGame();

            // Atualiza toda a UI com o estado inicial
            updateUI();

            alert("Você declarou falência. O jogo foi reiniciado.");
        }
    }



    function contratarPiloto(pilotoId) {
        const pilotoParaContratar = gameState.pilotos.find(p => p.id === pilotoId);
        if (!pilotoParaContratar || pilotoParaContratar.status !== 'Disponível') {
            alert("Piloto não está disponível para contratação.");
            return;
        }

        const meusPilotos = gameState.pilotos.filter(p => p.status === 'Jogador' || p.status === 'Reserva');
        const treinadorContratado = gameState.escuderia.especialistas.find(e => e.tipo === 'Treinador de Pilotos');

        // Lógica para contratar pilotos principais
        if (meusPilotos.filter(p => p.status === 'Jogador').length < 2) {
            if (gameState.escuderia.dinheiro < pilotoParaContratar.precoContrato) {
                alert(`Dinheiro insuficiente! Custo do contrato: R$ ${pilotoParaContratar.precoContrato.toLocaleString('pt-BR')}`);
                return;
            }
            gameState.escuderia.dinheiro -= pilotoParaContratar.precoContrato;
            pilotoParaContratar.status = 'Jogador';
            const carroVago = gameState.carros.find(c => c.pilotoId === null);
            if (carroVago) {
                carroVago.pilotoId = pilotoParaContratar.id;
            }
            alert(`Piloto ${pilotoParaContratar.nome} contratado para a equipe principal!`);
            updateUI();
            saveGame();
            return;
        }

        // Lógica para contratar piloto reserva
        if (treinadorContratado) {
            if (meusPilotos.some(p => p.status === 'Reserva')) {
                alert("Você já tem um piloto reserva. Dispense-o antes de contratar um novo.");
                return;
            }
            if (pilotoParaContratar.idade >= 23) {
                alert(`Para a vaga de reserva, o piloto deve ter menos de 23 anos. ${pilotoParaContratar.nome} tem ${pilotoParaContratar.idade}.`);
                return;
            }
            if (gameState.escuderia.dinheiro < pilotoParaContratar.precoContrato) {
                alert(`Dinheiro insuficiente! Custo do contrato: R$ ${pilotoParaContratar.precoContrato.toLocaleString('pt-BR')}`);
                return;
            }
            gameState.escuderia.dinheiro -= pilotoParaContratar.precoContrato;
            pilotoParaContratar.status = 'Reserva';
            alert(`Jovem talento ${pilotoParaContratar.nome} contratado como Piloto Reserva! Ele começará a treinar imediatamente.`);
            updateUI();
            saveGame();
            return;
        }

        // Se nenhuma das condições acima for atendida
        alert("Você já tem 2 pilotos na equipe principal. Contrate um Treinador de Pilotos para abrir uma vaga de piloto reserva.");
    }

    function dispensarPiloto(pilotoId) {
        const piloto = gameState.pilotos.find(p => p.id === pilotoId);
        if (!piloto || piloto.status !== 'Jogador') return;

        // Ação baseada na idade do piloto
        if (piloto.idade >= 35) {
            // APOSENTAR O PILOTO
            if (confirm(`Tem certeza que deseja aposentar ${piloto.nome}?\nEle será adicionado ao Hall da Fama e removido permanentemente do jogo.`)) {
                // Adiciona ao Hall da Fama
                gameState.galeria.hallDaFama.push({
                    piloto: JSON.parse(JSON.stringify(piloto)), // CORREÇÃO: Salva o objeto dentro da chave 'piloto'
                    anoAposentadoria: gameState.campeonato.ano,
                    emblemaNaEpoca: JSON.parse(JSON.stringify(gameState.escuderia.emblema))
                });

                // Libera o carro que ele estava usando
                const carroComPiloto = gameState.carros.find(c => c.pilotoId === pilotoId);
                if (carroComPiloto) {
                    carroComPiloto.pilotoId = null;
                }

                // Remove o piloto da lista principal de pilotos do jogo
                gameState.pilotos = gameState.pilotos.filter(p => p.id !== pilotoId);

                alert(`${piloto.nome} foi aposentado com honras e agora faz parte do Hall da Fama!`);
                updateUI();
                saveGame();
            }
        } else {
            // DISPENSAR O PILOTO (comportamento antigo)
            if (confirm(`Tem certeza que deseja dispensar ${piloto.nome}?\nEle voltará para o mercado de pilotos.`)) {
                piloto.status = 'Disponível';
                const carroComPiloto = gameState.carros.find(c => c.pilotoId === pilotoId);
                if (carroComPiloto) {
                    carroComPiloto.pilotoId = null;
                }
                alert(`${piloto.nome} foi dispensado e está de volta ao mercado.`);
                updateUI();
                saveGame();
            }
        }
    }

    function gerarPilotoSubstituto() {
        const nomes = ["J. Santos", "M. Oliveira", "L. Pereira", "G. Almeida", "R. Costa"];
        const novoPiloto = {
            id: Date.now(),
            nome: `Rookie ${nomes[Math.floor(Math.random() * nomes.length)]}`,
            idade: Math.floor(Math.random() * 5) + 18,
            habilidade: Math.floor(Math.random() * 11) + 65,
            consistencia: Math.floor(Math.random() * 16) + 60,
            gerenciamentoPneus: Math.floor(Math.random() * 16) + 60,
            salario: Math.floor(Math.random() * 20000) + 40000,
            precoContrato: Math.floor(Math.random() * 200000) + 400000,
            status: 'Jogador'
        };
        novoPiloto.atributosBase = { habilidade: novoPiloto.habilidade, consistencia: novoPiloto.consistencia, gerenciamentoPneus: novoPiloto.gerenciamentoPneus };
        gameState.pilotos.push(novoPiloto);
        return novoPiloto.id;
    }

    function processarEnvelhecimentoPilotos() {
        const pilotosAposentados = [];
        gameState.pilotos.forEach(piloto => {
            piloto.idade++;
            // Lógica de declínio de atributos
            if (piloto.idade >= 35) {
                piloto.habilidade = Math.max(40, piloto.habilidade - (Math.floor(Math.random() * 3)));
                piloto.consistencia = Math.max(40, piloto.consistencia - (Math.floor(Math.random() * 3)));
                piloto.gerenciamentoPneus = Math.max(40, piloto.gerenciamentoPneus - (Math.floor(Math.random() * 3)));
            }
            // Aposentadoria compulsória aos 45
            if (piloto.idade >= 45) {
                pilotosAposentados.push(piloto);
            }
        });

        pilotosAposentados.forEach(pilotoAposentado => {
            alert(`${pilotoAposentado.nome} (equipe: ${pilotoAposentado.status}) se aposentou aos ${pilotoAposentado.idade} anos!`);

            const equipeDoPiloto = pilotoAposentado.status;

            if (equipeDoPiloto === 'Jogador') {
                // Se o piloto do jogador se aposenta compulsoriamente
                gameState.galeria.hallDaFama.push({
                    piloto: JSON.parse(JSON.stringify(pilotoAposentado)), // CORREÇÃO: Salva o objeto dentro da chave 'piloto'
                    anoAposentadoria: gameState.campeonato.ano,
                    emblemaNaEpoca: JSON.parse(JSON.stringify(gameState.escuderia.emblema))
                });
                const novoPilotoId = gerarPilotoSubstituto();
                const carroDoAposentado = gameState.carros.find(c => c.pilotoId === pilotoAposentado.id);
                if (carroDoAposentado) {
                    carroDoAposentado.pilotoId = novoPilotoId;
                    const novoPiloto = gameState.pilotos.find(p => p.id === novoPilotoId);
                    alert(`Um novo talento da sua academia, ${novoPiloto.nome}, assume o lugar!`);
                }
            } else if (equipeDoPiloto !== 'Disponível' && equipeDoPiloto !== 'Indisponível') {
                // --- NOVA LÓGICA PARA A I.A. CONTRATAR UM SUBSTITUTO ---
                const equipeIA = equipesIA.find(e => e.nome === equipeDoPiloto);
                if (equipeIA) {
                    const pilotosDeMercado = gameState.pilotos.filter(p => p.status === 'Disponível');
                    if (pilotosDeMercado.length > 0) {
                        // Contrata o melhor piloto disponível (baseado em habilidade)
                        pilotosDeMercado.sort((a, b) => b.habilidade - a.habilidade);
                        const novoPilotoContratado = pilotosDeMercado[0];

                        // Atualiza o status do novo piloto
                        novoPilotoContratado.status = equipeIA.nome;

                        // Substitui o ID do piloto na equipe de IA
                        if (equipeIA.piloto1Id === pilotoAposentado.id) {
                            equipeIA.piloto1Id = novoPilotoContratado.id;
                        } else {
                            equipeIA.piloto2Id = novoPilotoContratado.id;
                        }

                        alert(`${equipeIA.nome} agiu rápido e contratou ${novoPilotoContratado.nome} para a vaga!`);
                    } else {
                        alert(`${equipeIA.nome} não encontrou pilotos disponíveis no mercado para substituir ${pilotoAposentado.nome}!`);
                    }
                }
            }

            // Remove o piloto aposentado da lista principal do jogo
            gameState.pilotos = gameState.pilotos.filter(p => p.id !== pilotoAposentado.id);
        });
    }



    /**
     * Gera o código HTML para o card de um piloto aposentado.
     * @param {object} entradaHall - O objeto do Hall da Fama { piloto, anoAposentadoria }.
     * @returns {string} - A string HTML do card.
     */
    function gerarCardAposentadoHtml(entradaHall) {
        // Acessa o objeto do piloto de dentro da entrada do Hall da Fama
        const piloto = entradaHall.piloto;

        // Se por algum motivo o piloto não existir, retorna um card de erro para não quebrar o jogo
        if (!piloto) {
            return '<div class="piloto-card aposentado"><p>Erro ao carregar dados do piloto aposentado.</p></div>';
        }

        const gerarHtmlAtributo = (label, valor) => {
            return `<p><span>${label}:</span> <strong>${Math.round(valor)}</strong></p>`;
        };

        return `
            <div class="piloto-card aposentado">
                <h4>${piloto.nome} <span style="font-weight:normal; color: #666;">(Aposentado aos ${piloto.idade} anos)</span></h4>
                <div class="atributos">
                    ${gerarHtmlAtributo('Habilidade Final', piloto.habilidade)}
                    ${gerarHtmlAtributo('Consistência Final', piloto.consistencia)}
                    ${gerarHtmlAtributo('Gerenc. Pneus Final', piloto.gerenciamentoPneus)}
                </div>
                <div class="piloto-aposentado-info">
                    Aposentado em: ${entradaHall.anoAposentadoria}
                </div>
            </div>`;
    }


    function atualizarMercadoDePilotos(pilotos) {
        pilotos.forEach(piloto => {
            if (piloto.status === 'Disponível') {
                piloto.status = 'Indisponível';
            }
        });
        const pilotosElegiveis = pilotos.filter(p => p.status === 'Indisponível');
        pilotosElegiveis.sort(() => 0.5 - Math.random());
        const novosDoMercado = pilotosElegiveis.slice(0, 7); //Quantidade de pilotos na lista de contratação.
        novosDoMercado.forEach(piloto => {
            piloto.status = 'Disponível';
        });
    }

    function gerarOfertasDePatrocinio() {
        const espacosDisponiveis = 4 - (gameState.patrocinio.ativos.length + gameState.patrocinio.ofertas.length);
        if (espacosDisponiveis <= 0 || Math.random() > 0.75) return;
        const classificacao = [...gameState.campeonato.classificacaoConstrutores].sort((a, b) => b.pontos - a.pontos);
        const nossaPosicao = classificacao.findIndex(e => e.equipe === gameState.escuderia.nome) + 1;
        let reputacao = nossaPosicao > 0 ? Math.max(1, 6 - nossaPosicao) : 1;
        reputacao += gameState.instalacoes.marketing; // ADICIONE ESTA LINHA (bônus direto na reputação)
        const patrocinadoresElegiveis = marcasPatrocinadores.filter(m => m.reputacaoMin <= reputacao);
        if (patrocinadoresElegiveis.length === 0) return;
        const marca = patrocinadoresElegiveis[Math.floor(Math.random() * patrocinadoresElegiveis.length)];
        const duracao = Math.floor(Math.random() * 6) + 3;
        const valor = Math.floor((500000 * reputacao) / (duracao * 0.2));
        gameState.patrocinio.ofertas.push({ id: Date.now(), marca: marca.nome, valor, duracao });
    }

    function venderPecaInventario(instanceId) {
        const pecaIndex = gameState.todasAsPecas.findIndex(p => p.instanceId === instanceId);
        if (pecaIndex === -1) { alert("Erro: Peça não encontrada!"); return; }
        const peca = gameState.todasAsPecas[pecaIndex];
        const valorVenda = Math.floor(calcularPrecoPeca(peca) * 0.70);
        if (confirm(`Tem certeza que deseja vender "${peca.nome}" (Nvl ${peca.nivel}) por R$ ${valorVenda.toLocaleString('pt-BR')}?`)) {
            gameState.escuderia.dinheiro += valorVenda;
            gameState.todasAsPecas.splice(pecaIndex, 1);
            alert(`Peça vendida com sucesso!`);
            updateUI(); saveGame();
        }
    }

    function atualizarPatrociniosAtivos() {
        gameState.patrocinio.ativos = gameState.patrocinio.ativos.filter(p => {
            p.duracaoRestante--;
            if (p.duracaoRestante > 0) return true;
            alert(`Contrato de patrocínio com ${p.marca} finalizado!`);
            return false;
        });
    }

    function aceitarOfertaPatrocinio(ofertaId) {
        if (gameState.patrocinio.ativos.length >= 4) { alert("Você já tem o máximo de 4 patrocinadores ativos!"); return; }
        const ofertaIndex = gameState.patrocinio.ofertas.findIndex(o => o.id === ofertaId);
        if (ofertaIndex === -1) return;
        const [oferta] = gameState.patrocinio.ofertas.splice(ofertaIndex, 1);
        gameState.escuderia.dinheiro += oferta.valor;
        gameState.patrocinio.ativos.push({ ...oferta, duracaoRestante: oferta.duracao });
        alert(`Parabéns! Contrato assinado com ${oferta.marca}, você recebeu R$ ${oferta.valor.toLocaleString('pt-BR')}!`);
        updateUI(); saveGame();
    }

    function iniciarNovoProjeto(especialistaId, tipoPeca, duracao) {
        const especialista = especialistasDisponiveis.find(e => e.id === especialistaId);
        if (!especialista) { alert("Especialista não encontrado!"); return; }

        // Lógica de custo modificada
        let custoTotal = (especialista.nivel * duracao * CUSTO_BASE_PROJETO) * 0.45;

        const pecasAero = ["Asa Dianteira", "Asa Traseira", "Chassi"];
        if (pecasAero.includes(tipoPeca)) {
            const reducaoCusto = 1.0 - (gameState.instalacoes.tunelDeVento * 0.10); // 10% por nível
            custoTotal *= reducaoCusto;
        }
        if (duracao === 10) {
            custoTotal *= 0.90; // Aplica o desconto de 10% para projetos de 10 corridas
        }

        if (gameState.escuderia.dinheiro < custoTotal) { alert(`Dinheiro insuficiente! Custo do projeto: R$ ${custoTotal.toLocaleString('pt-BR')}`); return; }
        gameState.escuderia.dinheiro -= custoTotal;
        // MODIFICAÇÃO: Adicionado "duracaoOriginal" para sabermos o tempo total do projeto no futuro.
        gameState.projetosEmAndamento.push({ id: Date.now(), tipoPeca, nomeEspecialista: especialista.nome, nivelEspecialista: especialista.nivel, duracaoOriginal: duracao, duracaoRestante: duracao, status: 'em_andamento' });
        alert(`Investimento de R$ ${custoTotal.toLocaleString('pt-BR')} realizado!\nProjeto para desenvolver "${tipoPeca}" iniciado com ${especialista.nome}.`);
        updateUI(); saveGame();
    }

    function processarProjetosConcluidos() {
        let projetoFoiConcluidoNestaCorrida = false;
        gameState.projetosEmAndamento.forEach(projeto => {
            // A verificação 'projeto.status' impede que o código seja executado novamente para projetos já concluídos
            if (projeto.status === 'em_andamento' && --projeto.duracaoRestante <= 0) {
                projeto.status = 'concluido';

                // --- PONTO CENTRAL DA CORREÇÃO ---
                // A peça é criada AQUI, uma única vez, e armazenada no próprio objeto do projeto.
                projeto.pecaConcluida = criarPecaDeProjeto(projeto);

                projetoFoiConcluidoNestaCorrida = true;
            }
        });
        if (projetoFoiConcluidoNestaCorrida) {
            setTimeout(() => alert("Um ou mais projetos de pesquisa foram concluídos! Verifique a aba Escuderia para decidir o que fazer com as peças."), 500);
        }
    }

    function processarVendasDeMercado() {
        let totalVendido = 0;
        gameState.projetosEmAndamento = gameState.projetosEmAndamento.filter(projeto => {
            if (projeto.status === 'a_venda') {
                if (Math.random() < 0.6) {
                    const pecaVirtual = criarPecaDeProjeto(projeto);
                    if(pecaVirtual) totalVendido += calcularPrecoPeca(pecaVirtual);
                    return false;
                }
                return true;
            }
            return true;
        });
        if (totalVendido > 0) {
            gameState.escuderia.dinheiro += totalVendido;
            setTimeout(() => alert(`Boas notícias! Peças desenvolvidas foram vendidas, gerando um lucro de R$ ${totalVendido.toLocaleString('pt-BR')}!`), 1000);
        }
    }

    function criarPecaDeProjeto(projeto) {
        let nivelSorteado;
        const chance = Math.random(); // Sorteia um número de 0 a 1 para a probabilidade

        // Lógica para 1 corrida
        if (projeto.duracaoOriginal === 1) {
            if (chance < 0.50) { // 50% de chance
                nivelSorteado = Math.floor(Math.random() * 3) + 1; // Nível aleatório entre 1 e 3
            } else { // 50% de chance
                nivelSorteado = Math.floor(Math.random() * 6) + 4; // Nível aleatório entre 4 e 10
            }
        }
        // Lógica para 3 corridas
        else if (projeto.duracaoOriginal === 3) {
            if (chance < 0.70) { // 70% de chance
                nivelSorteado = 7; // Nível fixo 5
            } else { // 30% de chance
                nivelSorteado = Math.floor(Math.random() * 5) + 6; // Nível aleatório entre 6 e 10
            }
        }
        // Lógica para 5 corridas
        else if (projeto.duracaoOriginal === 5) {
            if (chance < 0.80) { // 80% de chance
                nivelSorteado = Math.floor(Math.random() * 4) + 7; // Nível aleatório entre 7 e 10
            } else { // 20% de chance
                nivelSorteado = 9; // Nível fixo 9
            }
        }
        // LOGICA PARA 10 CORRIDAS
        else if (projeto.duracaoOriginal === 10) {
            if (chance < 0.99) { // 95% de chance
                nivelSorteado = Math.floor(Math.random() * 4) + 9; // Nível aleatório entre 7 e 10
            } else { // 20% de chance
                nivelSorteado = 10; // Nível fixo 9
            }
        }
        // Fallback para qualquer outra duração (não deve acontecer com a interface atual)
        else {
            nivelSorteado = 1;
        }

        // Procura por peças que correspondam ao tipo e ao nível sorteado
        const pecasCompativeis = Object.values(catalogoDePecas).filter(p => p.tipo === projeto.tipoPeca && p.nivel === nivelSorteado);

        let pecaTemplate;
        if (pecasCompativeis.length > 0) {
            // Se houver peças com o nível exato, escolhe uma aleatoriamente
            pecaTemplate = pecasCompativeis[Math.floor(Math.random() * pecasCompativeis.length)];
        } else {
            // Se não houver, procura a peça do mesmo tipo com o nível mais próximo para evitar erros
            let pecasDoTipo = Object.values(catalogoDePecas).filter(p => p.tipo === projeto.tipoPeca);
            if (pecasDoTipo.length === 0) return null; // Não existem peças deste tipo no catálogo
            pecasDoTipo.sort((a, b) => Math.abs(a.nivel - nivelSorteado) - Math.abs(b.nivel - nivelSorteado));
            pecaTemplate = pecasDoTipo[0];
        }

        if (!pecaTemplate) return null;

        const novaPeca = JSON.parse(JSON.stringify(pecaTemplate));

        novaPeca.nome = `${pecaTemplate.nome} (Projeto ${projeto.nomeEspecialista.split(' ')[0]})`;
        novaPeca.instanceId = projeto.id;

        // Melhora no cálculo de atributos para refletir o nível da peça e adicionar um pouco de aleatoriedade
        for (const attr in novaPeca.atributos) {
            const multiplicadorBase = 1 + (projeto.nivelEspecialista * 0.03) + (novaPeca.nivel * 0.1);
            const fatorAleatorio = 1 + (Math.random() * 0.2 - 0.1); // Adiciona uma variação de +/- 10%
            const Novovalor = Math.round(novaPeca.atributos[attr] * multiplicadorBase * fatorAleatorio)
            novaPeca.atributos[attr] = Math.min(Math.round(Novovalor), Math.round(novaPeca.atributos[attr] * 1.1));
        }
        novaPeca.corridasUsadas = 0;
        novaPeca.atributosOriginais = JSON.parse(JSON.stringify(novaPeca.atributos));
        return novaPeca;
    }

    function isEstrategiaValida(estrategia) {
        if (!estrategia || !estrategia.pneuInicial) return false;
        if (estrategia.paradas.length === 0) return true;
        const pneusUsados = new Set(estrategia.paradas.map(p => p.colocarPneu));
        pneusUsados.add(estrategia.pneuInicial);
        return pneusUsados.size >= 2;
    }

    function calcularPrecoPeca(peca) {
        let precoBase = peca.nivel * 99000;
        let multiplicadorAtributos = Object.values(peca.atributos).reduce((soma, valor) => soma + valor, 0);
        return Math.floor(precoBase + (multiplicadorAtributos * 100));
    }

    function gerarMercado(fatorDeQualidade = 0) {
        gameState.mercadoDePecas = [];
        const olheiroContratado = gameState.escuderia.especialistas.find(e => e.tipo === 'Olheiro');
        let numPecas = olheiroContratado ? 12 + Math.floor(Math.random() * 9) : 5;
        for (let i = 0; i < numPecas; i++) {
            const sorteioAjustado = (Math.random() * 100) + (fatorDeQualidade * 5);
            let nivelSorteado;
            if (sorteioAjustado < 55) nivelSorteado = Math.random() < 0.7 ? 1 : 2;
            else if (sorteioAjustado < 80) nivelSorteado = Math.random() < 0.7 ? 3 : 4;
            else if (sorteioAjustado < 95) nivelSorteado = Math.random() < 0.6 ? 5 : 6;
            else nivelSorteado = Math.floor(Math.random() * 4) + 7;
            const pecasDoNivel = Object.values(catalogoDePecas).filter(p => p.nivel === nivelSorteado);
            if (pecasDoNivel.length === 0) continue;
            const pecaTemplate = JSON.parse(JSON.stringify(pecasDoNivel[Math.floor(Math.random() * pecasDoNivel.length)]));
            for (const attr in pecaTemplate.atributos) {
                pecaTemplate.atributos[attr] = Math.round(pecaTemplate.atributos[attr] * (1 + (Math.random() * 0.1 - 0.05)));
            }
            const vendedor = equipesIA[Math.floor(Math.random() * equipesIA.length)].nome;
            gameState.mercadoDePecas.push({ ...pecaTemplate, instanceId: Date.now() + i, vendedor, preco: calcularPrecoPeca(pecaTemplate) });
        }
    }

    function comprarPeca(instanceId) {
        const pecaIndex = gameState.mercadoDePecas.findIndex(p => p.instanceId === instanceId);
        if (pecaIndex === -1) { alert("Esta peça não está mais disponível!"); return; }
        const peca = gameState.mercadoDePecas[pecaIndex];
        if (gameState.escuderia.dinheiro >= peca.preco) {
            gameState.escuderia.dinheiro -= peca.preco;
            const pecaComprada = {
                ...peca,
                corridasUsadas: 0,
                atributosOriginais: JSON.parse(JSON.stringify(peca.atributos))
            };
            gameState.todasAsPecas.push(pecaComprada);
            gameState.mercadoDePecas.splice(pecaIndex, 1);
            alert(`Peça "${peca.nome}" comprada com sucesso!`);
            updateUI();
            saveGame();
        } else {
            alert("Dinheiro insuficiente!");
        }
    }

    function openPartSelectorModal(slotKey) {
        const slotTypeDisplay = document.querySelector(`.btn-trocar-peca[data-slot-key="${slotKey}"]`).parentElement.querySelector('h4').textContent;
        document.getElementById('modal-title').textContent = `Selecionar: ${slotTypeDisplay}`;
        const modalList = document.getElementById('modal-parts-list');
        const pecasEquipadasIds = new Set(gameState.carros.flatMap(c => Object.values(c.pecas)));
        const normalize = (str) => str.toLowerCase().replace(/\s/g, '').normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const pecasCompativeis = gameState.todasAsPecas.filter(p => !pecasEquipadasIds.has(p.instanceId) && normalize(p.tipo) === normalize(slotKey));
        modalList.innerHTML = pecasCompativeis.length > 0
            ? pecasCompativeis.map(peca => `<div class="peca-card" data-instance-id="${peca.instanceId}" data-slot-key="${slotKey}"><h5>${peca.nome} (Nvl ${peca.nivel})</h5>${gerarHtmlAtributosPeca(peca)}</div>`).join('')
            : '<p>Nenhuma peça compatível no inventário.</p>';
        document.getElementById('part-selector-modal').classList.remove('hidden');
    }

    const closePartSelectorModal = () => document.getElementById('part-selector-modal').classList.add('hidden');

    function equiparPeca(instanceId, slotKey) {
        gameState.carros[garagemState.carroSelecionadoIndex].pecas[slotKey] = instanceId;
        closePartSelectorModal();
        updateUI();
        saveGame();
    }
    function autoEquiparMelhoresPecas() {
        const slotTypes = { motor: 'Motor', chassi: 'Chassi', asaDianteira: 'Asa Dianteira', asaTraseira: 'Asa Traseira', suspensao: 'Suspensão' };
        let pecasDisponiveis = [...gameState.todasAsPecas];
        gameState.carros.forEach(carro => {
            for (const slotKey in carro.pecas) {
                carro.pecas[slotKey] = null;
            }
        });
        gameState.carros.forEach(carro => {
            for (const slotKey in slotTypes) {
                const tipoPeca = slotTypes[slotKey];
                const pecasCompativeis = pecasDisponiveis.filter(p => p.tipo === tipoPeca);
                if (pecasCompativeis.length === 0) continue;
                pecasCompativeis.sort((a, b) => b.nivel - a.nivel);
                const melhorPeca = pecasCompativeis[0];
                carro.pecas[slotKey] = melhorPeca.instanceId;
                pecasDisponiveis = pecasDisponiveis.filter(p => p.instanceId !== melhorPeca.instanceId);
            }
        });
        alert("Carros 1 e 2 foram equipados com as melhores peças disponíveis no inventário!");
        renderGaragem();
        saveGame();
    }



    function calcularAtributosCarro(carro) {
        const atributosFinais = { potencia: 0, aerodinamica: 0, aderencia: 0, confiabilidade: 100 };
        if (!carro || !carro.pecas) return atributosFinais;

        for (const slot in carro.pecas) {
            const instanceId = carro.pecas[slot];
            if (instanceId) {
                const peca = gameState.todasAsPecas.find(p => p.instanceId === instanceId);
                if (peca && peca.atributos) {
                    for (const attr in peca.atributos) {
                        if (attr !== 'confiabilidade') {
                            atributosFinais[attr] += peca.atributos[attr];
                        } else {
                            // Para confiabilidade, usamos o menor valor entre as peças, não a soma
                            atributosFinais.confiabilidade = Math.min(atributosFinais.confiabilidade, peca.atributos.confiabilidade);
                        }
                    }
                }
            }
        }
        return atributosFinais;
    }



    function gerarEstrategiaIA(totalVoltas) {
        const todosOsPneus = ['macio', 'medio', 'duro'];
        let numParadas;

        // 1. Define os perfis de estratégia com base no total de voltas
        let perfilCorrida;
        if (totalVoltas <= 50) {
            perfilCorrida = { umaParada: 0.20, duasParadas: 0.70, tresParadas: 0.10 }; // 20% + 70% = 90%
        } else if (totalVoltas > 50 && totalVoltas <= 65) {
            perfilCorrida = { umaParada: 0.40, duasParadas: 0.50, tresParadas: 0.10 }; // 40% + 50% = 90%
        } else { // Mais de 65 voltas
            perfilCorrida = { umaParada: 0.25, duasParadas: 0.25, tresParadas: 0.50 }; // 25% + 25% = 50%
        }

        // 2. Sorteia o número de paradas de acordo com o perfil da corrida
        const chance = Math.random();
        if (chance < perfilCorrida.duasParadas) {
            numParadas = 2;
        } else if (chance < perfilCorrida.duasParadas + perfilCorrida.umaParada) {
            numParadas = 1;
        } else {
            numParadas = 3;
        }

        const numStints = numParadas + 1;
        const pneusDaEstrategia = [];

        // 3. Monta uma sequência de pneus aleatória, mas inteligente
        let ultimoPneu = null;
        for (let i = 0; i < numStints; i++) {
            let pneuEscolhido;
            const pneusDisponiveis = todosOsPneus.filter(p => p !== ultimoPneu);
            pneuEscolhido = pneusDisponiveis[Math.floor(Math.random() * pneusDisponiveis.length)];
            pneusDaEstrategia.push(pneuEscolhido);
            ultimoPneu = pneuEscolhido;
        }

        // 4. Validação final para garantir a regra de 2 compostos
        const compostosUnicos = new Set(pneusDaEstrategia);
        if (compostosUnicos.size < 2 && numParadas > 0) {
            let pneuDeTroca;
            do {
                pneuDeTroca = todosOsPneus[Math.floor(Math.random() * todosOsPneus.length)];
            } while (pneuDeTroca === pneusDaEstrategia[0]);
            pneusDaEstrategia[pneusDaEstrategia.length - 1] = pneuDeTroca;
        }

        // 5. Cálculo inteligente das voltas de parada (Normalização)
        const estrategiaFinal = {
            pneuInicial: pneusDaEstrategia[0],
            paradas: []
        };

        const duracaoTotalIdeal = pneusDaEstrategia.reduce((soma, pneu) => soma + pneus[pneu].duracaoIdeal, 0);
        let voltasAcumuladas = 0;

        for (let i = 0; i < numParadas; i++) {
            const pneuDoStint = pneusDaEstrategia[i];
            const proporcaoDoStint = pneus[pneuDoStint].duracaoIdeal / duracaoTotalIdeal;
            const voltasNoStint = Math.floor(totalVoltas * proporcaoDoStint);

            voltasAcumuladas += voltasNoStint;

            const variacao = Math.floor(Math.random() * 3 - 1); // Variação de -1 a +1 volta
            const pneuParaColocar = pneusDaEstrategia[i + 1];

            estrategiaFinal.paradas.push({
                pararNaVolta: voltasAcumuladas + variacao,
                colocarPneu: pneuParaColocar
            });
        }

        return estrategiaFinal;
    }

    async function animarGridDeLargada(grid, container) {
        if (!container) return;
        container.innerHTML = '<ol></ol>';
        const listElement = container.querySelector('ol');
        for (let i = grid.length - 1; i >= 0; i--) {
            const piloto = grid[i];
            const posicao = i + 1;
            const li = document.createElement('li');
            li.style.borderLeftColor = getCorDaEquipe(piloto.equipe);
            li.innerHTML = `<div><span class="pos">${posicao}.</span> <span class="piloto">${piloto.piloto.nome}</span> <span class="equipe">(${piloto.equipe})</span></div><span class="qualy-time">${formatLapTime(piloto.tempoQualy)}</span>`;
            listElement.appendChild(li);
            await new Promise(resolve => setTimeout(resolve, 900));
        }
    }

    async function animarLuzesDeLargada() {
        const modal = document.getElementById('lights-out-modal');
        const container = document.getElementById('lights-container');
        if (!modal || !container) return;
        const targetColumn = document.querySelector('.corrida-start-container');
        if (!targetColumn) return;

        const rect = targetColumn.getBoundingClientRect();
        const centroHorizontal = rect.left + (rect.width / 2);
        container.style.left = `${centroHorizontal}px`;

        container.innerHTML = '';
        modal.classList.add('visible');
        modal.classList.remove('hidden');
        let luzes = [];
        for (let i = 0; i < 5; i++) {
            const luz = document.createElement('div');
            luz.className = 'light-circle';
            container.appendChild(luz);
            luzes.push(luz);
        }
        for (const luz of luzes) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            luz.classList.add('on');
        }
        await new Promise(resolve => setTimeout(resolve, 1000));
        container.innerHTML = '';
        modal.classList.remove('visible');
        modal.classList.add('hidden');
    }


    function loopAnimacaoCanvas() {
        if (!animacaoAtiva) return;

        const canvas = document.getElementById('track-canvas');
        if (!canvas || !raceData || !raceData.pista) {
             requestAnimationFrame(loopAnimacaoCanvas);
             return;
        }

        const ctx = canvas.getContext('2d');
        const pistaCoords = coordenadasPistas[raceData.pista.nome];

        if (!pistaCoords) {
            requestAnimationFrame(loopAnimacaoCanvas);
            return;
        }

        // Calcula os fatores de escala
        const scaleX = ctx.canvas.width / DESIGN_WIDTH;
        const scaleY = ctx.canvas.height / DESIGN_HEIGHT;

        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        desenharPista(ctx, pistaCoords, scaleX, scaleY);
        desenharCarros(ctx, raceData.participantes, pistaCoords, scaleX, scaleY);

        requestAnimationFrame(loopAnimacaoCanvas);
    }

    function desenharPista(ctx, coords, scaleX, scaleY) {
        if (!coords || coords.length < 2) return;

        // Desenha a borda externa da pista
        ctx.strokeStyle = '#555';
        ctx.lineWidth = 22 * scaleY; // Escala a espessura da linha
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        ctx.moveTo(coords[0].x * scaleX, coords[0].y * scaleY); // Escala a coordenada
        for (let i = 1; i < coords.length; i++) {
            ctx.lineTo(coords[i].x * scaleX, coords[i].y * scaleY); // Escala a coordenada
        }
        ctx.stroke();

        // Desenha a parte interna cinza da pista
        ctx.strokeStyle = '#888';
        ctx.lineWidth = 18 * scaleY; // Escala a espessura da linha
        ctx.beginPath();
        ctx.moveTo(coords[0].x * scaleX, coords[0].y * scaleY); // Escala a coordenada
        for (let i = 1; i < coords.length; i++) {
            ctx.lineTo(coords[i].x * scaleX, coords[i].y * scaleY); // Escala a coordenada
        }
        ctx.stroke();

        // Desenha a linha de chegada
        const p0 = { x: coords[0].x * scaleX, y: coords[0].y * scaleY };
        const p1 = { x: coords[1].x * scaleX, y: coords[1].y * scaleY };

        const dx = p1.x - p0.x;
        const dy = p1.y - p0.y;
        const nx = -dy;
        const ny = dx;
        const length = Math.hypot(nx, ny);
        if (length === 0) return;
        const unx = nx / length;
        const uny = ny / length;

        const finishLineWidth = 25 * scaleY; // Escala a largura da linha
        const startLineX1 = p0.x - unx * (finishLineWidth / 2);
        const startLineY1 = p0.y - uny * (finishLineWidth / 2);
        const startLineX2 = p0.x + unx * (finishLineWidth / 2);
        const startLineY2 = p0.y + uny * (finishLineWidth / 2);

        ctx.beginPath();
        ctx.moveTo(startLineX1, startLineY1);
        ctx.lineTo(startLineX2, startLineY2);
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 7 * scaleY; // Escala a espessura da linha
        ctx.lineCap = 'butt';
        ctx.stroke();
    }



    // SUBSTITUA a sua função desenharCarros inteira por esta versão definitiva
    function desenharCarros(ctx, participantes, pistaCoords, scaleX, scaleY) {
        if (!pistaCoords || pistaCoords.length === 0 || participantes.length === 0) return;

        // Garante que a lista está sempre na ordem da corrida a cada quadro
        participantes.sort((a, b) => {
            if (a.tempoTotal === Infinity) return 1;
            if (b.tempoTotal === Infinity) return -1;
            return a.tempoTotal - b.tempoTotal;
        });

        let totalLength = 0;
        for (let i = 0; i < pistaCoords.length; i++) {
            const p1 = pistaCoords[i];
            const p2 = pistaCoords[(i + 1) % pistaCoords.length];
            totalLength += Math.hypot(p2.x - p1.x, p2.y - p1.y);
        }

        const tempoRealAtual = performance.now();
        const lider = participantes[0];

        if (lider.tempoTotal === Infinity || !lider.timestampInicioVolta) return;

        const progressoNaVoltaAtual = Math.max(0, Math.min((tempoRealAtual - lider.timestampInicioVolta) / (raceData.intervaloReal || raceData.intervalo), 1));
        const progressoLiderNaCorrida = ((raceData.voltaAtual > 0 ? raceData.voltaAtual - 1 : 0) + progressoNaVoltaAtual) / raceData.totalVoltas;
        const tempoTotalEstimadoDaCorrida = raceData.pista.tempoBaseVolta * raceData.totalVoltas;


        participantes.forEach(p => {
            if (p.tempoTotal === Infinity || !p.timestampInicioVolta) return;

            const tempoTotalParticipante = p.tempoInicioVolta + (p.duracaoVoltaEstimada * progressoNaVoltaAtual);
            const tempoTotalLiderInterpolado = lider.tempoInicioVolta + (lider.duracaoVoltaEstimada * progressoNaVoltaAtual);
            const gapDeTempo = tempoTotalParticipante - tempoTotalLiderInterpolado;
            const gapDeProgresso = (gapDeTempo / tempoTotalEstimadoDaCorrida) * 20;
            let progressoFinal = progressoLiderNaCorrida - gapDeProgresso;
            progressoFinal = Math.max(-0.2, Math.min(progressoFinal, 1.2));
            const distanciaPercorrida = totalLength * progressoFinal;

            let distanciaAcumulada = 0;
            let pontoAtual = { x: 0, y: 0 };
            for (let i = 0; i < pistaCoords.length; i++) {
                const pontoInicio = pistaCoords[i];
                const pontoFim = pistaCoords[(i + 1) % pistaCoords.length];
                const segmentoLength = Math.hypot(pontoFim.x - pontoInicio.x, pontoFim.y - pontoInicio.y);
                if (distanciaAcumulada + segmentoLength >= distanciaPercorrida) {
                    const fracaoSegmento = (distanciaPercorrida - distanciaAcumulada) / segmentoLength;
                    pontoAtual.x = pontoInicio.x + (pontoFim.x - pontoInicio.x) * fracaoSegmento;
                    pontoAtual.y = pontoInicio.y + (pontoFim.y - pontoInicio.y) * fracaoSegmento;
                    break;
                }
                distanciaAcumulada += segmentoLength;
            }

            // Aplica a escala nas coordenadas finais e nos tamanhos
            const finalX = pontoAtual.x * scaleX;
            const finalY = pontoAtual.y * scaleY;

            const carImageWidth = 20 * scaleX;
            const carImageHeight = 12 * scaleY;
            const backgroundWidth = carImageWidth - (6 * scaleX);
            const backgroundHeight = carImageHeight - (4 * scaleY);

            const carImageX = finalX - carImageWidth / 2;
            const carImageY = finalY - carImageHeight / 2;
            const backgroundX = finalX - backgroundWidth / 2;
            const backgroundY = finalY - backgroundHeight / 2;

            ctx.fillStyle = getCorDaEquipe(p.equipe);
            ctx.fillRect(backgroundX, backgroundY, backgroundWidth, backgroundHeight);
            ctx.drawImage(carIcon, carImageX, carImageY, carImageWidth, carImageHeight);
        });
    }





    // EM script.js
    async function iniciarSequenciaDeLargada(velocidade) {
        // 1. Desabilita os controles de estratégia
        document.querySelectorAll('.strategy-control').forEach(el => { el.disabled = true; });

        // 2. Prepara os dados dos participantes (código inalterado)
        const pista = calendarioCorridas[gameState.campeonato.corridaAtualIndex];
        let participantesIniciais = [];
        gameState.carros.forEach(carro => {
            const piloto = gameState.pilotos.find(p => p.id === carro.pilotoId);
            if (piloto) {
                participantesIniciais.push({
                    piloto,
                    equipe: gameState.escuderia.nome,
                    isPlayer: true,
                    atributos: calcularAtributosCarro(carro),
                    estrategia: JSON.parse(JSON.stringify(carro.estrategia)),
                    pneuAtual: carro.estrategia.pneuInicial,
                    ers: JSON.parse(JSON.stringify(carro.ers)) // <-- CORREÇÃO: Adicionada esta linha para copiar os dados do ERS
                });
            }
        });
        equipesIA.forEach(equipe => {
            const piloto1 = gameState.pilotos.find(p => p.id === equipe.piloto1Id);
            const piloto2 = gameState.pilotos.find(p => p.id === equipe.piloto2Id);

            if (piloto1) {
                const estrategiaPiloto1 = gerarEstrategiaIA(pista.voltas);
                participantesIniciais.push({
                    piloto: piloto1,
                    equipe: equipe.nome,
                    isPlayer: false,
                    atributos: equipe.carro,
                    estrategia: estrategiaPiloto1,
                    pneuAtual: estrategiaPiloto1.pneuInicial
                });
            }
            if (piloto2) {
                const estrategiaPiloto2 = gerarEstrategiaIA(pista.voltas);
                participantesIniciais.push({
                    piloto: piloto2,
                    equipe: equipe.nome,
                    isPlayer: false,
                    atributos: equipe.carro,
                    estrategia: estrategiaPiloto2,
                    pneuAtual: estrategiaPiloto2.pneuInicial
                });
            }
        });
        const gridDeLargada = participantesIniciais
            // <-- CORREÇÃO: Adicionado o parâmetro final '0' para o bonusERS no qualify -->
            .map(p => ({ ...p, tempoQualy: calcularTempoVolta(p, pista, pneus.macio.multiplicadorPerformance, 0, 0, 0) }))
            .sort((a, b) => a.tempoQualy - b.tempoQualy);
        const dadosDaPole = { piloto: gridDeLargada[0].piloto.nome, tempo: gridDeLargada[0].tempoQualy };

        // 3. Inicia a sequência de animações de pré-corrida
        const tituloEl = document.getElementById('corrida-titulo-pre-race');
        const gridContainer = document.getElementById('grid-formation-container');
        document.getElementById('race-options-container').classList.add('hidden');

        if (tituloEl) tituloEl.textContent = 'Formação de Grid (Qualify)';
        if (gridContainer) gridContainer.classList.remove('hidden');

        await animarGridDeLargada(gridDeLargada, gridContainer);
        await new Promise(resolve => setTimeout(resolve, 1000));
        await animarLuzesDeLargada();

        // --- 4. TRANSIÇÃO CORRETA DA UI ---
        document.getElementById('info-pre-corrida-esquerda').classList.add('hidden');
        document.getElementById('info-pre-corrida-direita').classList.add('hidden');
        document.getElementById('pre-race-view').classList.add('hidden');
        document.getElementById('player-car-1-status').classList.remove('hidden');
        document.getElementById('player-car-2-status').classList.remove('hidden');
        document.getElementById('live-race-view').classList.remove('hidden');
        document.getElementById('info-pre-corrida-esquerda').classList.remove('hidden');
        document.getElementById('info-pre-corrida-direita').classList.remove('hidden');


        // 5. Prepara os dados e inicia os loops da corrida
        const finalParticipants = gridDeLargada.map((p, index) => {
            const gridPenalty = index * 0.150;

            if (p.isPlayer) {
                p.ers.bateria = 0;
                p.ers.voltasParaCarregar = Math.floor(Math.random() * 3) + 4;
                p.ers.totalVoltasParaCarregar = p.ers.voltasParaCarregar;
                p.ers.cicloDeCarregamento = 0;
                p.ers.ativo = false;
            }

            return { ...p, tempoTotal: gridPenalty, tempoInicioVolta: gridPenalty, ultimaVolta: null, stintAtual: 0, durabilidadePneu: 100, penalidadeCombustivel: 2.6, paradas: 0, melhorVoltaPessoal: Infinity, voltasNoPneuAtual: 0, timestampInicioVolta: 0, duracaoVoltaEstimada: pista.tempoBaseVolta, modoAgressividade: 'padrão' };
        });
        raceData = { participantes: finalParticipants, pista, voltaAtual: 1, totalVoltas: pista.voltas, intervalo: velocidade === 'real' ? 10000 : 2000, melhorVolta: Infinity, pilotoMelhorVolta: null, polePosition: dadosDaPole };
        redimensionarCanvas();
        renderTabelaAoVivo();
        animacaoAtiva = true;
        loopAnimacaoCanvas();
        timestampUltimaSimulacao = performance.now();
        raceData.intervaloReal = raceData.intervalo;
        raceTimerId = setInterval(() => {
            if (!animacaoAtiva || raceData.voltaAtual > raceData.totalVoltas) {
                finalizarCorrida(); return;
            }
            simularUmaVolta();
            raceData.participantes.sort((a, b) => a.tempoTotal - b.tempoTotal);
            renderTabelaAoVivo();
            gerarMensagensDeRadio();
            raceData.voltaAtual++;
        }, raceData.intervalo);
    }



    function calcularTempoVolta(participante, pista, multiPneu, penDesgaste, penCombustivel, bonusERS = 0) { // <-- ALTERADO
        const carro = participante.atributos;
        const piloto = participante.piloto;
        const bonusHabilidade = piloto.habilidade / 50.0;
        const fatorConsistencia = (1 - (piloto.consistencia / 200));
        const pontuacaoCarro = ((carro.potencia * pista.demandaMotor) + (carro.aerodinamica * pista.demandaAero) + (carro.aderencia * pista.demandaAderencia)) * multiPneu;
        const fatorDesempenho = pontuacaoCarro / 100;
        const fatorSorte = (Math.random() - 0.5) * (0.6 * fatorConsistencia);
        // Aplica o bônus do ERS subtraindo do tempo final
        return pista.tempoBaseVolta - fatorDesempenho - bonusHabilidade + penDesgaste + penCombustivel + fatorSorte - bonusERS; // <-- ALTERADO
    }


    function simularUmaVolta() {
        const agora = performance.now();
        raceData.intervaloReal = agora - timestampUltimaSimulacao;
        timestampUltimaSimulacao = agora;

        raceData.participantes.forEach(p => {
            if (p.tempoTotal === Infinity) return;

            // <-- INÍCIO DA NOVA LÓGICA ERS -->
            let bonusERS = 0;
            if (p.isPlayer && p.ers) {
                if (p.ers.ativo) {
                    // Define o bônus com base no nível da instalação
                    const nivelERS = gameState.instalacoes.ers;
                    if (nivelERS === 1) bonusERS = 0.300;
                    else if (nivelERS === 2) bonusERS = 0.600;
                    else if (nivelERS >= 3) bonusERS = 1.000;

                    p.ers.cicloDeCarregamento--;
                    p.ers.bateria = (p.ers.cicloDeCarregamento / 3) * 100; // Bateria descarrega em 3 voltas

                    // Se o ciclo de uso acabou, reseta
                    if (p.ers.cicloDeCarregamento <= 0) {
                        p.ers.ativo = false;
                        p.ers.bateria = 0;
                        p.ers.voltasParaCarregar = Math.floor(Math.random() * 3) + 4; // Novo ciclo de 4 a 6 voltas
                        p.ers.totalVoltasParaCarregar = p.ers.voltasParaCarregar;
                    }
                } else {
                    // Carrega a bateria
                    p.ers.voltasParaCarregar--;
                    const progressoCarga = 1 - (p.ers.voltasParaCarregar / p.ers.totalVoltasParaCarregar);
                    p.ers.bateria = Math.min(100, progressoCarga * 100);

                    // Se carregou completamente
                    if (p.ers.voltasParaCarregar <= 0) {
                        p.ers.ativo = true;
                        p.ers.bateria = 100;
                        p.ers.cicloDeCarregamento = 3; // Dura 3 voltas
                    }
                }
            }
            // <-- FIM DA NOVA LÓGICA ERS -->

            let fatorRitmo = 1.0;
            let fatorDesgastePneu = 1.0;

            if (p.modoAgressividade === 'atacar') {
                fatorRitmo = 0.985;
                fatorDesgastePneu = 1.40;
            } else if (p.modoAgressividade === 'conservar') {
                fatorRitmo = 1.02;
                fatorDesgastePneu = 0.65;
            }

            p.tempoInicioVolta = p.tempoTotal;
            p.timestampInicioVolta = agora;

            const paradaInfo = p.estrategia.paradas[p.stintAtual];
            if (paradaInfo && paradaInfo.pararNaVolta === raceData.voltaAtual) {
                const reducaoPitStop = gameState.instalacoes.treinoDeBox * 0.5;
                const tempoDePitFinal = Math.max(18, raceData.pista.pitstopTime - reducaoPitStop);
                const pneuAtual = pneus[p.pneuAtual];
                const piloto = p.piloto;
                const fatorGerenciamento = (1 - (piloto.gerenciamentoPneus / 300));
                const desgasteFinal = pneuAtual.desgastePorVolta * fatorGerenciamento;
                const penalidadeDesgaste = (100 - p.durabilidadePneu) * 0.03;

                const voltaDaUltimaParada = p.paradas.length > 0 ? p.estrategia.paradas.at(-1).pararNaVolta : 0;
                const proximaParada = paradaInfo ? paradaInfo.pararNaVolta : raceData.totalVoltas;
                const tamanhoStint = proximaParada - voltaDaUltimaParada;
                const progressoStint = tamanhoStint > 0 ? (raceData.voltaAtual - voltaDaUltimaParada) / tamanhoStint : 1;
                const penalidadeCombustivelAtualizada = p.penalidadeCombustivel * (1 - progressoStint);

                let tempoDaVoltaBase = calcularTempoVolta(p, raceData.pista, pneuAtual.multiplicadorPerformance, penalidadeDesgaste, penalidadeCombustivelAtualizada, bonusERS); // <-- ALTERADO

                const tempoFinalDaVoltaComPit = tempoDaVoltaBase + tempoDePitFinal;

                p.duracaoVoltaEstimada = tempoFinalDaVoltaComPit;
                p.tempoTotal += tempoFinalDaVoltaComPit;
                p.ultimaVolta = `PIT STOP (${formatLapTime(tempoFinalDaVoltaComPit)})`;

                p.pneuAtual = paradaInfo.colocarPneu;
                p.stintAtual++;
                p.durabilidadePneu = 100;
                p.penalidadeCombustivel = 2.6;
                p.paradas++;
                p.voltasNoPneuAtual = 1;
                return;
            }
            if (Math.random() < 0.002 * (1 - (p.atributos.confiabilidade / 100))) { p.tempoTotal = Infinity; p.ultimaVolta = "DNF"; return; }

            const pneuAtual = pneus[p.pneuAtual];
            const piloto = p.piloto;
            const fatorGerenciamento = (1 - (piloto.gerenciamentoPneus / 300));
            const desgasteFinal = pneuAtual.desgastePorVolta * fatorGerenciamento;
            const penalidadeDesgaste = (100 - p.durabilidadePneu) * 0.03;
            const voltaDaUltimaParada = p.paradas.length > 0 ? p.estrategia.paradas.at(-1).pararNaVolta : 0;
            const proximaParada = paradaInfo ? paradaInfo.pararNaVolta : raceData.totalVoltas;
            const tamanhoStint = proximaParada - voltaDaUltimaParada;
            const progressoStint = tamanhoStint > 0 ? (raceData.voltaAtual - voltaDaUltimaParada) / tamanhoStint : 1;
            const penalidadeCombustivelAtualizada = p.penalidadeCombustivel * (1 - progressoStint);

            let tempoDaVolta = calcularTempoVolta(p, raceData.pista, pneuAtual.multiplicadorPerformance, penalidadeDesgaste, penalidadeCombustivelAtualizada, bonusERS); // <-- ALTERADO

            p.duracaoVoltaEstimada = tempoDaVolta;
            if (tempoDaVolta < raceData.melhorVolta) { raceData.melhorVolta = tempoDaVolta; raceData.pilotoMelhorVolta = p.piloto.nome; }
            if (tempoDaVolta < p.melhorVoltaPessoal) { p.melhorVoltaPessoal = tempoDaVolta; }
            p.ultimaVolta = formatLapTime(tempoDaVolta);
            p.tempoTotal += tempoDaVolta;
            p.durabilidadePneu -= desgasteFinal;
            p.voltasNoPneuAtual++;
        });
    }

    async function animarBandeirada() {
        return new Promise(resolve => {
            const modal = document.getElementById('chequered-flag-modal');
            if (!modal) {
                resolve();
                return;
            }

            modal.classList.remove('hidden');
            modal.classList.add('visible');

            // Esconde a bandeira depois de 4 segundos
            setTimeout(() => {
                modal.classList.remove('visible');
                // Espera a transição de opacidade terminar antes de esconder o elemento de fato
                setTimeout(() => {
                    modal.classList.add('hidden');
                    resolve(); // Resolve a promise aqui, indicando que a animação terminou
                }, 500); // Este tempo deve ser igual à duração da transição no CSS
            }, 4000); // Duração da bandeira na tela (4 segundos)
        });
    }



    function desbloquearItemMarketing(nomeItem) {
        const itemCatalogo = catalogoMarketing[nomeItem];
        const itemJogo = gameState.marketing[nomeItem];

        if (!itemCatalogo || !itemJogo || itemJogo.desbloqueado) return;

        if (gameState.escuderia.dinheiro >= itemCatalogo.custo_desbloqueio) {
            gameState.escuderia.dinheiro -= itemCatalogo.custo_desbloqueio;
            itemJogo.desbloqueado = true;
            alert(`Produto "${nomeItem}" desbloqueado com sucesso!`);
            updateUI();
            saveGame();
        } else {
            alert(`Dinheiro insuficiente! Custo para desbloquear: R$ ${itemCatalogo.custo_desbloqueio.toLocaleString('pt-BR')}`);
        }
    }

    function produzirItemMarketing(nomeItem, quantidade) {
        const itemCatalogo = catalogoMarketing[nomeItem];
        const itemJogo = gameState.marketing[nomeItem];
        const quantidadeNumerica = parseInt(quantidade);

        if (!itemCatalogo || !itemJogo || !itemJogo.desbloqueado || isNaN(quantidadeNumerica) || quantidadeNumerica <= 0) {
            alert("Quantidade inválida ou item não desbloqueado.");
            return;
        }

        const custoTotal = itemCatalogo.custo_producao * quantidadeNumerica;

        if (gameState.escuderia.dinheiro >= custoTotal) {
            gameState.escuderia.dinheiro -= custoTotal;
            itemJogo.inventario += quantidadeNumerica;
            alert(`${quantidadeNumerica} unidades de "${nomeItem}" foram produzidas!`);
            updateUI();
            saveGame();
        } else {
            alert(`Dinheiro insuficiente! Custo de produção: R$ ${custoTotal.toLocaleString('pt-BR')}`);
        }
    }

    function definirPrecoVendaMarketing(nomeItem, novoPreco) {
        const itemCatalogo = catalogoMarketing[nomeItem];
        const itemJogo = gameState.marketing[nomeItem];
        const precoNumerico = parseFloat(novoPreco);

        if (!itemCatalogo || !itemJogo || isNaN(precoNumerico)) return;

        if (precoNumerico < itemCatalogo.preco_venda_minimo) {
            alert(`O preço de venda para ${nomeItem} não pode ser menor que o mínimo de R$ ${itemCatalogo.preco_venda_minimo.toLocaleString('pt-BR')}.`);
            // Reseta o input para o valor mínimo para não confundir o usuário
            const inputPreco = document.querySelector(`.marketing-item-card[data-item-nome="${nomeItem}"] input[type="number"]`);
            if(inputPreco) inputPreco.value = itemCatalogo.preco_venda_minimo;
            itemJogo.preco_venda_definido = itemCatalogo.preco_venda_minimo;
        } else {
            itemJogo.preco_venda_definido = precoNumerico;
            saveGame(); // Salva automaticamente quando um preço válido é definido
        }
    }



    function promoverPilotoReserva(pilotoId) {
        const pilotoParaPromover = gameState.pilotos.find(p => p.id === pilotoId);
        if (!pilotoParaPromover || pilotoParaPromover.status !== 'Reserva') {
            alert("Este piloto não é um reserva válido.");
            return;
        }

        const vagasPrincipaisOcupadas = gameState.pilotos.filter(p => p.status === 'Jogador').length;
        if (vagasPrincipaisOcupadas >= 2) {
            alert("Não há vagas na equipe principal. Dispense um piloto antes de promover o reserva.");
            return;
        }

        const carroVago = gameState.carros.find(c => c.pilotoId === null);
        if (!carroVago) {
            alert("Erro interno: Nenhuma vaga de carro encontrada para o piloto promovido.");
            return;
        }

        // Efetiva a promoção
        pilotoParaPromover.status = 'Jogador';
        carroVago.pilotoId = pilotoParaPromover.id;

        alert(`${pilotoParaPromover.nome} foi promovido para a equipe principal!`);
        updateUI();
        saveGame();
    }

    function simularVendasMarketing() {
        let receitaTotal = 0;
        let relatorioVendas = "Relatório de Vendas de Marketing:\n\n";
        let algumaVendaOcorreu = false;

        const classificacaoConstrutores = [...gameState.campeonato.classificacaoConstrutores].sort((a, b) => b.pontos - a.pontos);
        const nossaPosicaoConstrutores = classificacaoConstrutores.findIndex(e => e.equipe === gameState.escuderia.nome) + 1;

        const ultimaCorrida = gameState.campeonato.resultadosCorridas.at(-1);
        if (!ultimaCorrida) return;

        const meusPilotosIds = gameState.carros.map(c => c.pilotoId);
        const resultadosMeusPilotos = ultimaCorrida.resultadoFinal
            .map((res, index) => ({ ...res, posicao: index + 1 }))
            .filter(res => meusPilotosIds.includes(res.piloto.id));
        const melhorPosicaoCorrida = resultadosMeusPilotos.length > 0 ? Math.min(...resultadosMeusPilotos.map(p => p.posicao)) : 20;

        for (const nomeItem in gameState.marketing) {
            const itemJogo = gameState.marketing[nomeItem];
            const itemCatalogo = catalogoMarketing[nomeItem];

            if (itemJogo.inventario > 0) {
                const precoMin = itemCatalogo.preco_venda_minimo;
                const precoDefinido = itemJogo.preco_venda_definido;
                const markup = (precoDefinido - precoMin) / precoMin;
                let modPreco = 1.0;
                if (markup < 0.25) modPreco = 1.2;
                else if (markup > 0.40) modPreco = 0.8;

                let chanceBase = 0;
                let modDesempenho = 1.0;

                if (nossaPosicaoConstrutores > 0 && nossaPosicaoConstrutores <= 10) {
                     modDesempenho += (11 - nossaPosicaoConstrutores) * 0.05;
                }

                if (nomeItem === "Chaveiro") {
                    chanceBase = 0.60;
                } else if (nomeItem === "Bonés") {
                    chanceBase = 0.25;
                    if (melhorPosicaoCorrida <= 5) modDesempenho += (6 - melhorPosicaoCorrida) * 0.2;
                } else if (nomeItem === "Camisa" || nomeItem === "Carro em miniatura") {
                    chanceBase = 0.15;
                    if (melhorPosicaoCorrida <= 3) modDesempenho += (4 - melhorPosicaoCorrida) * 0.25;
                    if (nossaPosicaoConstrutores > 0 && nossaPosicaoConstrutores <= 3) modDesempenho += (4 - nossaPosicaoConstrutores) * 0.2;
                } else if (nomeItem === "Anel com joia") {
                    chanceBase = 0.01;
                    if (melhorPosicaoCorrida <= 3) {
                        chanceBase = 0.70;
                        modDesempenho = 1.0;
                        modPreco = 1.0;
                    }
                }

                // --- CORREÇÃO AQUI ---
                // A variável agora é declarada com 'let' para permitir a modificação pelo bônus.
                let chanceFinalVenda = Math.min(chanceBase * modPreco * modDesempenho, 0.95);

                const bonusVendas = 1.0 + (gameState.instalacoes.marketing * 0.05);
                chanceFinalVenda *= bonusVendas; // Esta linha agora funciona sem erro.
                // --- FIM DA CORREÇÃO ---

                let unidadesVendidas = 0;
                for (let i = 0; i < itemJogo.inventario; i++) {
                    if (Math.random() < chanceFinalVenda) {
                        unidadesVendidas++;
                    }
                }

                if (unidadesVendidas > 0) {
                    const receitaItem = unidadesVendidas * itemJogo.preco_venda_definido;
                    receitaTotal += receitaItem;
                    itemJogo.inventario -= unidadesVendidas;
                    relatorioVendas += `- ${nomeItem}: ${unidadesVendidas} unid. vendidas por R$ ${receitaItem.toLocaleString('pt-BR')}\n`;
                    algumaVendaOcorreu = true;
                }
            }
        }

        if (algumaVendaOcorreu) {
            gameState.escuderia.dinheiro += receitaTotal;
            relatorioVendas += `\nReceita Total: R$ ${receitaTotal.toLocaleString('pt-BR')}`;
            setTimeout(() => alert(relatorioVendas), 2500);
        }
    }

    /**
     * Processa a evolução de todos os pilotos jovens (17-30 anos) no jogo.
     * A evolução é baseada em um crescimento natural e bônus por desempenho.
     */

    // Em script.js, SUBSTITUA a função processarEvolucaoPilotos

    function processarEvolucaoPilotos() {
        console.log("Processando ciclo de evolução dos pilotos...");
        const melhoriasJogador = [];
        const treinadorContratado = gameState.escuderia.especialistas.find(e => e.tipo === 'Treinador de Pilotos');

        gameState.pilotos.forEach(piloto => {
            // A lógica de evolução agora se aplica a pilotos do jogador ou reserva
            const isPilotoTreinavel = piloto.status === 'Jogador' || piloto.status === 'Reserva';

            if (piloto.idade < 16 || piloto.idade > 30 || !isPilotoTreinavel) return;

            const crescimentoBase = Math.random() * 0.50; /* Bonus de Crescimento base */
            let bonusDesempenho = 0;
            const ultimaCorrida = gameState.campeonato.resultadosCorridas.at(-1);

            // Bônus de desempenho só se aplica a pilotos que correram (não ao reserva)
            if (ultimaCorrida && piloto.status === 'Jogador') {
                const posicao = ultimaCorrida.resultadoFinal.findIndex(res => res.piloto.id === piloto.id) + 1;
                if (posicao > 0) {
                    if (posicao === 1) bonusDesempenho = Math.random() * 0.4 + 0.2;
                    else if (posicao <= 3) bonusDesempenho = Math.random() * 0.3;
                    else if (posicao <= 10) bonusDesempenho = Math.random() * 0.15;
                }
            }

            let crescimentoTotal = crescimentoBase + bonusDesempenho;

            const bonusSimulador = 1.0 + (gameState.instalacoes.simulador * 0.05); // 5% por nível
            crescimentoTotal *= bonusSimulador;

            // APLICAÇÃO DOS BÔNUS DO TREINADOR
            if (treinadorContratado) {
                if (piloto.status === 'Jogador') {
                    crescimentoTotal *= 3.0; // Bônus  para pilotos principais
                } else if (piloto.status === 'Reserva') {
                    crescimentoTotal *= 4.25; // Bônus  para o piloto reserva
                }
            }

            if (crescimentoTotal > 0) {
                const atributosAntigos = { hab: piloto.habilidade, con: piloto.consistencia, ger: piloto.gerenciamentoPneus };

                piloto.habilidade = Math.min(98, piloto.habilidade + crescimentoTotal * (Math.random() * 0.5 + 0.75));
                piloto.consistencia = Math.min(98, piloto.consistencia + crescimentoTotal * (Math.random() * 0.4 + 0.4));
                piloto.gerenciamentoPneus = Math.min(98, piloto.gerenciamentoPneus + crescimentoTotal * (Math.random() * 0.4 + 0.6));

                const detalhesMelhoria = [];
                if (Math.floor(piloto.habilidade) > Math.floor(atributosAntigos.hab)) {
                    detalhesMelhoria.push(`  Hab: ${Math.floor(atributosAntigos.hab)} -> ${Math.floor(piloto.habilidade)}`);
                }
                if (Math.floor(piloto.consistencia) > Math.floor(atributosAntigos.con)) {
                    detalhesMelhoria.push(`  Con: ${Math.floor(atributosAntigos.con)} -> ${Math.floor(piloto.consistencia)}`);
                }
                if (Math.floor(piloto.gerenciamentoPneus) > Math.floor(atributosAntigos.ger)) {
                    detalhesMelhoria.push(`  Ger: ${Math.floor(atributosAntigos.ger)} -> ${Math.floor(piloto.gerenciamentoPneus)}`);
                }

                if (detalhesMelhoria.length > 0) {
                    const tipoPiloto = piloto.status === 'Reserva' ? 'Reserva' : 'Piloto';
                    melhoriasJogador.push(`${piloto.nome} (${tipoPiloto}):\n` + detalhesMelhoria.join('\n'));
                }
            }
        });

        if (melhoriasJogador.length > 0) {
            setTimeout(() => {
                alert(
                    "Relatório de Desenvolvimento de Pilotos:\n\n" +
                    "Seus pilotos evoluíram com o treinamento:\n\n" +
                    melhoriasJogador.join('\n\n')
                );
            }, 3000);
        }


        if (melhoriasJogador.length > 0) {
            setTimeout(() => {
                alert(
                    "Relatório de Desenvolvimento de Pilotos:\n\n" +
                    "Seus pilotos jovens evoluíram com o treinamento e a experiência da corrida:\n\n" +
                    melhoriasJogador.join('\n\n')
                );
            }, 3000);
        }
    }

    /**
     * Exibe uma mensagem de rádio na tela, identificando o remetente correto.
     * @param {number} carroIndex - O índice do carro (0 para Carro 1, 1 para Carro 2).
     * @param {string} remetente - 'Piloto' ou 'Engenheiro'.
     * @param {string} texto - A mensagem a ser exibida.
     */
    function exibirMensagemRadio(carroIndex, remetente, texto) {
        const container = document.getElementById('radio-display-box');
        if (!container) return;

        let nomeRemetenteFinal = '';

        if (remetente === 'Engenheiro') {
            // Identifica o engenheiro pelo número do carro
            nomeRemetenteFinal = `Engenheiro ${carroIndex + 1}`;
            container.style.borderLeftColor = '#e10600'; // Cor para o engenheiro
        } else {
            // Pega o nome do piloto correspondente ao carro
            const pilotoId = gameState.carros[carroIndex].pilotoId;
            const piloto = gameState.pilotos.find(p => p.id === pilotoId);
            // Usa apenas o último nome para um estilo de rádio mais autêntico
            nomeRemetenteFinal = piloto ? piloto.nome.split(' ').pop() : 'Piloto';
            container.style.borderLeftColor = '#008cba'; // Cor para o piloto
        }

        // Exibe a nova mensagem
        container.innerHTML = `<strong>${nomeRemetenteFinal}:</strong> ${texto}`;
        container.classList.add('visible');

        // Agenda a mensagem para desaparecer após 7 segundos
        setTimeout(() => {
            container.classList.remove('visible');
        }, 8000);
    }


    function gerarMensagensDeRadio() {
        for (let i = 0; i < gameState.carros.length; i++) {
            if (Math.random() > 0.25) continue; // 25% de chance de gerar mensagem

            const pilotoId = gameState.carros[i].pilotoId;
            const participante = raceData.participantes.find(p => p.piloto.id === pilotoId);

            if (!participante) continue;

            const durabilidade = participante.durabilidadePneu;
            const modo = participante.modoAgressividade;
            let categoria = null;

            // --- ESTRUTURA LÓGICA CORRIGIDA E PRIORIZADA ---

            // 1. Verifica se o piloto é o LÍDER (máxima prioridade)
            if (participante.posicao === 1) {
                const segundoLugar = raceData.participantes.find(p => p.posicao === 2);
                // Se o segundo lugar existir e estiver a menos de 1 segundo, o líder está em perigo
                if (segundoLugar && segundoLugar.gapParaFrente < 1.0) {
                    categoria = catalogoMensagens.lidercorrida_perigo;
                } else {
                    categoria = catalogoMensagens.lidercorrida; // Senão, está seguro
                }
            }
            // 2. Se não for o líder, verifica se está em uma BATALHA (gap pequeno)
            else if (participante.posicao > 1 && participante.gapParaFrente > 0 && participante.gapParaFrente < 1.0) {
                categoria = catalogoMensagens.gap_pequeno;
            }
            // 3. Se não, verifica o MODO DE AGRESSIVIDADE
            else if (modo === 'atacar') {
                categoria = durabilidade > 50 ? catalogoMensagens.ataque_pneu_bom : catalogoMensagens.ataque_pneu_ruim;
            }
            else if (modo === 'conservar') {
                categoria = durabilidade > 40 ? catalogoMensagens.conservar_pneu_bom : catalogoMensagens.conservar_pneu_ruim;
            }

            // 4. Verifica se um PIT STOP está próximo (pode sobrescrever modos de agressividade)
            const paradaInfo = participante.estrategia.paradas[participante.stintAtual];
            if (paradaInfo && paradaInfo.pararNaVolta === raceData.voltaAtual + 1) {
                categoria = catalogoMensagens.pit_stop_proximo;
            }

            // Se uma categoria foi encontrada, exibe a mensagem e para a verificação
            if (categoria) {
                const mensagem = categoria[Math.floor(Math.random() * categoria.length)];
                exibirMensagemRadio(i, mensagem.remetente, mensagem.texto);
                return;
            }
        }
    }



    async function finalizarCorrida() {
        clearInterval(raceTimerId);
        raceTimerId = null;
        animacaoAtiva = false;

        await animarBandeirada(); // Espera a animação da bandeira terminar
        document.getElementById('corrida').classList.remove('race-in-progress');

        processarResultados(raceData.participantes, raceData.pilotoMelhorVolta);
        processarPagamentoDeSalarios(); // Processa o pagamento de salários aqui
        processarDesgastePecas();
        gameState.campeonato.corridaAtualIndex++;
        atualizarPatrociniosAtivos();
        gerarOfertasDePatrocinio();
        processarProjetosConcluidos();
        processarVendasDeMercado();
        simularVendasMarketing();
        gerarMercado();


        // Verifica se é hora de rodar o ciclo de evolução (a cada 5 corridas)
        // Usamos o operador de módulo (%) que retorna o resto de uma divisão.
        // A corrida 5, 10, 15, etc., terá resto 0 quando dividida por 5.
        // gameState.campeonato.corridaAtualIndex começa em 0, então somamos 1.
        if ((gameState.campeonato.corridaAtualIndex + 1) % 5 === 0) {
            processarEvolucaoPilotos();
        }

        const btnFechar = document.getElementById('btn-fechar-resultados');
        if(btnFechar) {
            btnFechar.classList.remove('hidden');
            btnFechar.disabled = false;
        }
        saveGame();
    }



    function processarReajusteSalarialEspecialistas() {
        // Se não houver especialistas contratados, não faz nada
        if (gameState.escuderia.especialistas.length === 0) return;

        // Pega a classificação final de construtores para determinar a posição da equipe
        const classificacaoConstrutores = [...gameState.campeonato.classificacaoConstrutores].sort((a, b) => b.pontos - a.pontos);
        const nossaPosicao = classificacaoConstrutores.findIndex(e => e.equipe === gameState.escuderia.nome) + 1;

        let percentualDeAumento = 0;
        const ano = gameState.campeonato.ano;

        // Determina o percentual de aumento com base no ano e na posição
        if (ano < 2026) {
            if (nossaPosicao === 1) {
                percentualDeAumento = 0.40; // 40%
            } else if (nossaPosicao >= 2 && nossaPosicao <= 5) {
                percentualDeAumento = 0.30; // 30%
            } else if (nossaPosicao >= 6 && nossaPosicao <= 8) {
                percentualDeAumento = 0.15; // 15%
            } else {
                percentualDeAumento = 0.05; // 5%
            }
        } else { // A partir de 2027
            if (nossaPosicao === 1) {
                percentualDeAumento = 0.90; // 90%
            } else if (nossaPosicao >= 2 && nossaPosicao <= 5) {
                percentualDeAumento = 0.80; // 80%
            } else if (nossaPosicao >= 6 && nossaPosicao <= 8) {
                percentualDeAumento = 0.50; // 50%
            } else {
                percentualDeAumento = 0.20; // 10%
            }
        }

        const detalhesReajuste = [];
        // Aplica o reajuste para cada especialista contratado
        gameState.escuderia.especialistas.forEach(especialista => {
            const salarioAntigo = especialista.salario;
            // Calcula e arredonda o novo salário
            especialista.salario = Math.round(salarioAntigo * (1 + percentualDeAumento));
            detalhesReajuste.push(`${especialista.nome}: R$ ${salarioAntigo.toLocaleString('pt-BR')} -> R$ ${especialista.salario.toLocaleString('pt-BR')}`);
        });

        // Exibe um alerta detalhado para o jogador
        setTimeout(() => {
            alert(
                `Reajuste Salarial de Fim de Temporada!\n\n` +
                `Com base no seu ${nossaPosicao}º lugar no campeonato de construtores, os salários da sua equipe técnica foram reajustados em ${(percentualDeAumento * 100)}%:\n\n` +
                `${detalhesReajuste.join('\n')}`
            );
        }, 1000); // Um pequeno delay para não sobrepor outros alertas
    }



    function processarFimDeTemporada() {
        alert("FIM DA TEMPORADA!\n\nConfira a classificação final na Aba Campeonato e receba seus bônus de premiação!");
        const classificacaoConstrutores = [...gameState.campeonato.classificacaoConstrutores].sort((a, b) => b.pontos - a.pontos);
        const classificacaoPilotos = [...gameState.campeonato.classificacaoPilotos].sort((a, b) => b.pontos - a.pontos);
        const equipeCampe = classificacaoConstrutores[0];
        const pilotoCampeao = classificacaoPilotos[0];

        // FIX: Check if a champion team exists before trying to access its properties
        if (equipeCampe && equipeCampe.equipe === gameState.escuderia.nome) {
            gameState.galeria.titulosConstrutores++;
            alert(`🏆 PARABÉNS! Sua equipe, ${gameState.escuderia.nome}, é a CAMPEÃ DE CONSTRUTORES de ${gameState.campeonato.ano}!`);
        }


        // FIX: Check if a champion pilot exists before trying to access their properties
        if (pilotoCampeao) {
            const pilotoDaCasa = gameState.pilotos.find(p => p.nome === pilotoCampeao.piloto && p.status === 'Jogador');
            if (pilotoDaCasa) {
                gameState.galeria.titulosPilotos++;
                alert(`🏆 INCRÍVEL! Seu piloto, ${pilotoCampeao.piloto}, é o CAMPEÃO MUNDIAL DE PILOTOS de ${gameState.campeonato.ano}!`);
            }
        }

        const nossaPosicao = classificacaoConstrutores.findIndex(e => e.equipe === gameState.escuderia.nome) + 1;
        const bonus = { 1: 5000000, 2: 3500000, 3: 2500000, 4: 1500000, 5: 1000000 };
        if (nossaPosicao > 0 && bonus[nossaPosicao]) {
            gameState.escuderia.dinheiro += bonus[nossaPosicao];
            alert(`Parabéns pelo ${nossaPosicao}º lugar no Campeonato de Construtores! Você ganhou um bônus de R$ ${bonus[nossaPosicao].toLocaleString('pt-BR')}!`);
        }

        processarReajusteSalarialEspecialistas();
        processarEnvelhecimentoPilotos();
        atualizarMercadoDePilotos(gameState.pilotos);
        alert("O mercado de pilotos foi atualizado para a nova temporada!");

        gameState.campeonato.ano++;
        // CRITICAL FIX: Reset the race index for the new season
        gameState.campeonato.corridaAtualIndex = 0;
        gameState.campeonato.classificacaoPilotos = [];
        gameState.campeonato.classificacaoConstrutores = [];
        gameState.campeonato.resultadosCorridas = [];
    }


     // Calcula e deduz os salários dos pilotos e especialistas do caixa da equipe.
     // Exibe um alerta com o resumo das despesas.

    function processarPagamentoDeSalarios() {
        let totalSalariosPilotos = 0;
        let totalSalariosEquipe = 0;

        // 1. Calcula o salário dos pilotos contratados
        const meusPilotos = gameState.pilotos.filter(p => p.status === 'Jogador');
        meusPilotos.forEach(piloto => {
            totalSalariosPilotos += piloto.salario || 0;
        });

        // 2. Calcula o salário da equipe de especialistas
        gameState.escuderia.especialistas.forEach(especialista => {
            totalSalariosEquipe += especialista.salario || 0;
        });

        const despesaTotal = totalSalariosPilotos + totalSalariosEquipe;

        // 3. Deduz o valor total do caixa da equipe
        gameState.escuderia.dinheiro -= despesaTotal;

        // 4. Informa o jogador sobre a despesa através de um alerta
        if (despesaTotal > 0) {
            // Usamos setTimeout para que este alerta não se sobreponha a outros de fim de corrida
            setTimeout(() => {
                alert(
                    `Pagamentos processados após a corrida:\n\n` +
                    `Salário dos Pilotos: R$ ${totalSalariosPilotos.toLocaleString('pt-BR')}\n` +
                    `Salário da Equipe Técnica: R$ ${totalSalariosEquipe.toLocaleString('pt-BR')}\n\n` +
                    `Despesa Total: R$ ${despesaTotal.toLocaleString('pt-BR')}`
                );
            }, 2000); // Delay de 2 segundos
        }
    }



    function processarResultados(resultados, pilotoMelhorVoltaNome) {
        const pistaAtual = calendarioCorridas[gameState.campeonato.corridaAtualIndex];
        const nomePista = pistaAtual.nome;
        if (!gameState.historicoAutodromos[nomePista]) {
            gameState.historicoAutodromos[nomePista] = {
                recordeVolta: { tempo: Infinity, piloto: null, ano: null },
                historicoAnual: []
            };
        }
        const historicoPista = gameState.historicoAutodromos[nomePista];
        const resultadoDoAno = {
            ano: gameState.campeonato.ano,
            podium: resultados.slice(0, 3).map(p => p.piloto.nome),
            voltaRapida: { piloto: pilotoMelhorVoltaNome, tempo: raceData.melhorVolta },
            pole: raceData.polePosition
        };
        historicoPista.historicoAnual.push(resultadoDoAno);
        if (raceData.melhorVolta < historicoPista.recordeVolta.tempo) {
            historicoPista.recordeVolta = {
                tempo: raceData.melhorVolta,
                piloto: pilotoMelhorVoltaNome,
                ano: gameState.campeonato.ano
            };
        }
        gameState.campeonato.resultadosCorridas.push({ nomePista, resultadoFinal: resultados, melhorVolta: { piloto: pilotoMelhorVoltaNome, tempo: raceData.melhorVolta } });
        const pilotoDaMelhorVolta = resultados.find(p => p.piloto.nome === pilotoMelhorVoltaNome);
        if (pilotoDaMelhorVolta && pilotoDaMelhorVolta.isPlayer) {
            const bonusDinheiro = 150000;
            // --- INÍCIO DA NOVA LÓGICA INTELIGENTE DE RECOMPENSA ---
            const anoAtual = gameState.campeonato.ano;
            let niveisPossiveis = [];

            // Define os níveis de peças possíveis com base no ano
            if (anoAtual <= 2025) {
                niveisPossiveis = [6, 7, 9]; // No primeiro ano, só peças de nível 1 a 3
            } else if (anoAtual <= 2027) {
                niveisPossiveis = [8, 9, 10]; // Nos anos seguintes, peças melhores
            } else if (anoAtual <= 2029) {
                niveisPossiveis = [9,10];
            } else {
                niveisPossiveis = [10]; // Em anos avançados, apenas peças de elite
            }

            // 1. Filtra o catálogo para pegar apenas as peças dos níveis permitidos
            const pecasElegiveis = Object.values(catalogoDePecas).filter(peca => niveisPossiveis.includes(peca.nivel));

            // 2. Sorteia uma peça aleatória APENAS da lista de peças elegíveis
            const pecaTemplate = pecasElegiveis[Math.floor(Math.random() * pecasElegiveis.length)];
            // --- FIM DA NOVA LÓGICA ---
            const novaPeca = {
                ...pecaTemplate,
                instanceId: Date.now(),
                corridasUsadas: 0,
                atributosOriginais: JSON.parse(JSON.stringify(pecaTemplate.atributos))
            };
            gameState.escuderia.dinheiro += bonusDinheiro;
            gameState.todasAsPecas.push(novaPeca);
            alert(`${pilotoMelhorVoltaNome} cravou a volta mais rápida e ganhou um bônus de R$ ${bonusDinheiro.toLocaleString('pt-BR')} e uma nova peça: ${novaPeca.nome}!`);
        }
        const premios = { 1: 500000, 2: 390000, 3: 300000, 4: 250000, 5: 180000, 6: 150000, 7: 100000, 8: 70000, 9: 50000, 10: 40000, 11: 30000, 12: 20000, 13: 10000, 14: 5000, 15: 1000 };
        resultados.forEach((res, index) => {
            const posicao = index + 1;
            if (res.isPlayer && premios[posicao]) {
                gameState.escuderia.dinheiro += premios[posicao];
                setTimeout(() => alert(`Parabéns! Você terminou em ${posicao}º e ganhou R$ ${premios[posicao].toLocaleString('pt-BR')}!`), 100);
            }
        });
        resultados.forEach(res => {
            if (!gameState.campeonato.classificacaoPilotos.find(p => p.piloto === res.piloto.nome)) {
                gameState.campeonato.classificacaoPilotos.push({ piloto: res.piloto.nome, equipe: res.equipe, pontos: 0 });
            }
            if (!gameState.campeonato.classificacaoConstrutores.find(e => e.equipe === res.equipe)) {
                gameState.campeonato.classificacaoConstrutores.push({ equipe: res.equipe, pontos: 0 });
            }
        });
        resultados.forEach((res, index) => {
            const posicao = index + 1;
            if (pontosPorPosicao[posicao]) {
                const pontosGanhos = pontosPorPosicao[posicao];
                gameState.campeonato.classificacaoPilotos.find(p => p.piloto === res.piloto.nome).pontos += pontosGanhos;
                gameState.campeonato.classificacaoConstrutores.find(e => e.equipe === res.equipe).pontos += pontosGanhos;
            }
        });

        // --- INÍCIO DA MODIFICAÇÃO ---
        // Este novo bloco atualiza as estatísticas persistentes na galeria
        resultados.forEach((resultado, index) => {
            if (resultado.isPlayer) {
                const nomePiloto = resultado.piloto.nome;
                // Inicializa as estatísticas do piloto se ele ainda não existir na galeria
                if (!gameState.galeria.estatisticasPilotos[nomePiloto]) {
                    gameState.galeria.estatisticasPilotos[nomePiloto] = { corridas: 0, vitorias: 0, podios: 0, pontos: 0 };
                }
                const stats = gameState.galeria.estatisticasPilotos[nomePiloto];
                stats.corridas++;
                if (index === 0) stats.vitorias++;
                if (index < 3) stats.podios++;

                const posicao = index + 1;
                if (pontosPorPosicao[posicao]) {
                    stats.pontos += pontosPorPosicao[posicao];
                }
            }
        });
        // --- FIM DA MODIFICAÇÃO ---
    }

    function melhorarInstalacao(instalacaoId) {
        const instalacao = catalogoInstalacoes[instalacaoId];
        const nivelAtual = gameState.instalacoes[instalacaoId];
        const maxLevel = instalacao.custos.length - 1;

        if (nivelAtual >= maxLevel) {
            alert("Esta instalação já está no nível máximo!");
            return;
        }

        const custoParaMelhorar = instalacao.custos[nivelAtual + 1];
        if (gameState.escuderia.dinheiro >= custoParaMelhorar) {
            if (confirm(`Deseja melhorar ${instalacao.nome} para o Nível ${nivelAtual + 1} por R$ ${custoParaMelhorar.toLocaleString('pt-BR')}?`)) {
                gameState.escuderia.dinheiro -= custoParaMelhorar;
                gameState.instalacoes[instalacaoId]++;
                alert(`${instalacao.nome} melhorado com sucesso!`);
                updateUI();
                saveGame();
            }
        } else {
            alert("Dinheiro insuficiente para esta melhoria.");
        }
    }



    function atualizarSumarioProjeto() {
        const especialista = especialistasDisponiveis.find(e => e.id === projetoAtual.especialistaId);
        const duracaoEl = document.getElementById('project-duration');
        // --- NOVO: Pega o tipo de peça selecionado ---
        const tipoPeca = document.getElementById('project-part-type').value;

        if (!especialista || !duracaoEl) return;
        const duracao = parseInt(duracaoEl.value);

        let custoEstimado = (especialista.nivel * duracao * CUSTO_BASE_PROJETO) * 0.45;

        // Aplica o desconto de 10% para projetos de 10 corridas
        if (duracao === 10) {
            custoEstimado *= 0.90;
        }

        // --- LÓGICA DO TÚNEL DE VENTO ADICIONADA AQUI ---
        const infoDescontoEl = document.getElementById('project-discount-info');
        infoDescontoEl.innerHTML = ''; // Limpa a mensagem de desconto anterior

        const pecasAero = ["Asa Dianteira", "Asa Traseira", "Chassi"];
        const nivelTunel = gameState.instalacoes.tunelDeVento;

        if (pecasAero.includes(tipoPeca) && nivelTunel > 0) {
            const percentualReducao = nivelTunel * 10;
            const multiplicadorReducao = 1.0 - (nivelTunel * 0.10);
            custoEstimado *= multiplicadorReducao;

            // Cria a mensagem de desconto para exibir ao usuário
            infoDescontoEl.innerHTML = `<p style="color: #28a745; font-size: 0.9em; font-weight: bold;">Desconto do Túnel de Vento (Nvl ${nivelTunel}): -${percentualReducao}%</p>`;
        }
        // --- FIM DA NOVA LÓGICA ---

        document.getElementById('project-cost').textContent = custoEstimado.toLocaleString('pt-BR');
        document.getElementById('project-quality').textContent = duracao >= 10 ? 'Excepcional' : duracao >= 5 ? 'Excelente' : duracao >= 3 ? 'Boa' : 'Regular';
    }

    // --- 4. RENDERIZADORES DA UI ---
    // Em script.js, dentro da função updateUI()
    const updateUI = () => { renderEscuderia(); renderGaragem(); renderAbaPilotos(); renderAbaAutodromo(); renderAbaGaleria(); renderAbaCorrida(); renderAbaCampeonato(); renderAbaNegociacoes(); renderAbaPersonalizacao(); renderAbaMarketing(); renderAbaInstalacoes(); };

    function renderAbaInstalacoes() {
        const container = document.getElementById('instalacoes-container');
        if (!container) return;

        container.innerHTML = Object.entries(catalogoInstalacoes).map(([id, data]) => {
            const nivelAtual = gameState.instalacoes[id];
            const maxLevel = data.custos.length - 1;

            let custoHtml = '';
            let botaoHtml = '';

            if (nivelAtual >= maxLevel) {
                custoHtml = `<p><strong>Nível Máximo Atingido</strong></p>`;
                botaoHtml = `<button class="btn-corrida btn-real" disabled>Nível Máximo</button>`;
            } else {
                const custoProximoNivel = data.custos[nivelAtual + 1];
                const temDinheiro = gameState.escuderia.dinheiro >= custoProximoNivel;
                custoHtml = `<p><strong>Custo para Nível ${nivelAtual + 1}:</strong> R$ ${custoProximoNivel.toLocaleString('pt-BR')}</p>`;
                botaoHtml = `<button class="btn-corrida btn-real" data-action="melhorar-instalacao" data-instalacao-id="${id}" ${temDinheiro ? '' : 'disabled'}>Melhorar</button>`;
            }

            return `
                <div class="instalacao-card">
                    <h4>${data.nome}</h4>
                    <p>Nível Atual: <span class="level-display">${nivelAtual} / ${maxLevel}</span></p>
                    <p>${data.descricao}</p>
                    <p><strong>Bônus por Nível:</strong> ${data.bonusPorNivel}</p>
                    <div class="custo-info">
                        ${custoHtml}
                        ${botaoHtml}
                    </div>
                </div>
            `;
        }).join('');
    }


    function redimensionarCanvas() {
        const canvas = document.getElementById('track-canvas');
        if (!canvas) return;

        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;

        if (animacaoAtiva && raceData.pista) {
            const ctx = canvas.getContext('2d');
            const pistaCoords = coordenadasPistas[raceData.pista.nome];

            // Calcula e passa os fatores de escala também aqui
            const scaleX = canvas.width / DESIGN_WIDTH;
            const scaleY = canvas.height / DESIGN_HEIGHT;

            desenharPista(ctx, pistaCoords, scaleX, scaleY);
            desenharCarros(ctx, raceData.participantes, pistaCoords, scaleX, scaleY);
        }
    }

    function renderEscuderia() {
        document.getElementById('escuderia-nome').textContent = gameState.escuderia.nome;
        document.querySelectorAll('.escuderia-dinheiro-display').forEach(el => { el.textContent = gameState.escuderia.dinheiro.toLocaleString('pt-BR'); });
        document.getElementById('input-nome-escuderia').value = gameState.escuderia.nome;
        document.querySelectorAll('.campeonato-ano-display').forEach(el => el.textContent = gameState.campeonato.ano);
        renderEspecialistas();
        renderProjetos();
        renderPatrocinadores();

        // CORREÇÃO: A chamada para o elemento inexistente 'emblema-display-header' foi removida.
        // Agora renderizamos apenas o emblema que realmente existe na aba.
        const emblemaEscuderiaContainer = document.getElementById('emblema-display-escuderia');
        renderizarEmblema(emblemaEscuderiaContainer, gameState.escuderia.emblema);
    }

    function renderPatrocinadores() {
        for (let i = 1; i <= 4; i++) {
            const slot = document.getElementById(`patrocinador-slot-${i}`);
            const patrocinador = gameState.patrocinio.ativos[i - 1];
            slot.classList.toggle('ocupado', !!patrocinador);
            slot.innerHTML = patrocinador ? `<h5>${patrocinador.marca}</h5><p>Restam: ${patrocinador.duracaoRestante} corridas</p>` : `<span>Patrocínio Disponível</span>`;
        }
        const containerOfertas = document.getElementById('ofertas-patrocinio-container');
        containerOfertas.innerHTML = gameState.patrocinio.ofertas.length === 0 ? '<p>Nenhuma nova oferta de patrocínio no momento.</p>' : gameState.patrocinio.ofertas.map(oferta => `<div class="oferta-patrocinio-card"><h4>${oferta.marca}</h4><p><strong>Valor do Contrato:</strong> R$ ${oferta.valor.toLocaleString('pt-BR')}</p><p><strong>Duração:</strong> ${oferta.duracao} corridas</p><button class="btn-aceitar-patrocinio" data-oferta-id="${oferta.id}">Aceitar Oferta</button></div>`).join('');
    }

    function renderEspecialistas() {
        const containerContratados = document.getElementById('lista-especialistas-contratados');
        const containerDisponiveis = document.getElementById('lista-especialistas-disponiveis');
        if (!containerContratados || !containerDisponiveis) return;

        const idsContratados = new Set(gameState.escuderia.especialistas.map(e => e.id));

        containerContratados.innerHTML = gameState.escuderia.especialistas.map(e => {
            // --- ALTERAÇÃO AQUI ---
            // A lógica foi expandida para incluir o bônus do Treinador de Pilotos
            let bonusText = '';
            if (e.tipo === 'Olheiro') {
                bonusText = `<p style="color: #008cba; font-weight: bold; font-size: 0.9em;">Bônus: Aumenta a quantidade e a qualidade das peças no mercado.</p>`;
            } else if (e.tipo === 'Treinador de Pilotos') {
                bonusText = `<p style="color: #008cba; font-weight: bold; font-size: 0.9em;">Bônus: Melhora os Skills dos pilotos principais e reserva.</p>`;
            }
            // --- FIM DA ALTERAÇÃO ---

            const acoes = especialistaHabilidades[e.tipo] ? `<button class="btn-projeto" data-especialista-id="${e.id}">Iniciar Projeto</button>` : '';

            return `<div class="especialista-card"><h4>${e.nome}</h4><p><strong>Tipo:</strong> ${e.tipo}</p><p><strong>Nível:</strong> ${e.nivel}</p><p><strong>Salário:</strong> R$ ${e.salario.toLocaleString('pt-BR')}</p>${bonusText}<div class="card-actions">${acoes}<button class="btn-demitir" data-id="${e.id}">Demitir</button></div></div>`;
        }).join('');

        containerDisponiveis.innerHTML = especialistasDisponiveis.filter(e => !idsContratados.has(e.id)).map(e => {
            return `<div class="especialista-card"><h4>${e.nome}</h4><p><strong>Tipo:</strong> ${e.tipo}</p><p><strong>Nível:</strong> ${e.nivel}</p><p><strong>Custo:</strong> R$ ${e.salario.toLocaleString('pt-BR')}</p><button class="btn-contratar" data-id="${e.id}">Contratar</button></div>`;
        }).join('');
    }

    function renderProjetos() {
        const containerProjetos = document.getElementById('projetos-em-andamento-container');
        if (!containerProjetos) return;
        if (gameState.projetosEmAndamento.length === 0) { containerProjetos.innerHTML = "<p>Nenhum projeto em desenvolvimento.</p>"; return; }

        containerProjetos.innerHTML = gameState.projetosEmAndamento.map(projeto => {
            if (projeto.status === 'em_andamento') {
                return `<div class="projeto-card"><h4>${projeto.tipoPeca}</h4><p><strong>Desenvolvido por:</strong> ${projeto.nomeEspecialista}</p><p><strong>Conclusão em:</strong> ${projeto.duracaoRestante} corrida(s)</p></div>`;
            }
            if (projeto.status === 'concluido') {
                // Em vez de chamar criarPecaDeProjeto() novamente, agora lemos a peça que já foi criada e salva.
                const pecaVirtual = projeto.pecaConcluida;

                if (!pecaVirtual) {
                    return `<div class="projeto-card-concluido" style="border-color: #dc3545;"><h4>Erro no Projeto: ${projeto.tipoPeca}</h4><p><strong>Modelo base não encontrado!</strong></p></div>`;
                }
                return `<div class="projeto-card-concluido" style="border-color: #28a745; padding: 1rem;">
                            <h4>Projeto Concluído: ${pecaVirtual.nome} (Nvl ${pecaVirtual.nivel})</h4>
                            ${gerarHtmlAtributosPeca(pecaVirtual)}
                            <p style="margin-top: 1rem;">Decida o que fazer:</p>
                            <button class="btn-ficar-com-peca" data-project-id="${projeto.id}">Ficar com a Peça</button>
                            <button class="btn-vender-peca" data-project-id="${projeto.id}">Vender a Peça</button>
                        </div>`;
            }
            if (projeto.status === 'a_venda') {
                return `<div class="projeto-card" style="border-color: #008cba;"><h4>À Venda: ${projeto.tipoPeca}</h4><p>Aguardando um comprador...</p></div>`;
            }
            return '';
        }).join('');
    }


    function renderAbaPersonalizacao() {
        console.log("--- EXECUTANDO renderAbaPersonalizacao V6 ---");
        // --- Defina aqui os nomes dos arquivos que você baixou ---
        const listaDeFormas = ['circle.svg','circleheart.svg','circlesmall.svg','circlethreequarters.svg','cube.svg','cubes.svg','frame.svg','infinity.svg','modelcube.svg','modelcubespace.svg','oval.svg','pyramid.svg','rectanglehorizontal.svg','rectanglehorizontal1.svg','rhombus.svg','seal.svg','settings.svg','sphere.svg','square.svg','square1.svg','squaredashed.svg','squarestar.svg','star-christmas.svg','starchristmas1.svg','starchristmas2.svg','windowframe.svg','windowframe1.svg'];
        const listaDeIcones = ['asterik.svg',	'asterik1.svg',	'auto-pilot.svg',	'badge-leaf.svg',	'badge-percent.svg',	'badge-sheriff.svg',	'badge-sheriff1.svg',	'badge-sheriff2.svg',	'bat.svg',	'bat1.svg',	'block.svg',	'bolt.svg',	'bowarrow.svg',	'campfire.svg',	'cat.svg',	'chessking.svg',	'chevrondoubleup.svg',	'clawmarks.svg',	'clawmarks1.svg',	'cow.svg',	'cow1.svg',	'crown.svg',	'crown1.svg',	'dove.svg',	'dragon.svg',	'dragon1.svg',	'eagle.svg',	'equestrianstatue.svg',	'featherpointed.svg',	'firstaward.svg',	'flagcheckered.svg',	'flowerbutterfly.svg',	'fox.svg',	'heartupsidedown.svg',	'heartupsidedown1.svg',	'horseshoe.svg',	'lightbulbsetting.svg',	'lion.svg',	'lionhead.svg',	'luchador.svg',	'medicalstar.svg',	'membership.svg',	'om.svg',	'pawclaws.svg',	'pawheart.svg',	'peace.svg',	'peace1.svg',	'percent80.svg',	'rabbit.svg',	'raccoon.svg',	'resources.svg',	'shield.svg',	'shield1.svg',	'shieldalt1.svg',	'shieldcross.svg',	'shieldcross1.svg',	'shielddividedfour.svg',	'sleepingcat.svg',	'snake.svg',	'snake1.svg',	'squirrel.svg',	'starandcrescent.svg',	'starexclamation.svg',	'staroctogram.svg',	'stars.svg',	'steeringwheel.svg',	'suitcase-alt.svg',	'suitcasealt1.svg',	'sword.svg',	't.svg',	'tablelist.svg',	'tablelist1.svg',	'tablelist2.svg',	'tire.svg',	'tire1.svg',	'tire2.svg',	'torch.svg',	'trademark.svg',	'transformationdesign.svg',	'transformationshapes.svg',	'turtle.svg',	'user-crown.svg',	'usercrown1.svg',	'venus.svg',	'wavetriangle.svg',	'whale.svg',	'wingsbox.svg',	'worm.svg'];

        const seletorFormasContainer = document.getElementById('seletor-formas');
        const seletorIconesContainer = document.getElementById('seletor-icones');

        // Popula o seletor de formas
        seletorFormasContainer.innerHTML = listaDeFormas.map(nomeArquivo => `
            <div class="seletor-item" data-tipo="forma" data-valor="${nomeArquivo}">
                <img src="img/emblemas/formas/${nomeArquivo}" alt="${nomeArquivo}">
            </div>
        `).join('');

        // Popula o seletor de ícones
        seletorIconesContainer.innerHTML = listaDeIcones.map(nomeArquivo => `
            <div class="seletor-item" data-tipo="icone" data-valor="${nomeArquivo}">
                <img src="img/emblemas/icones/${nomeArquivo}" alt="${nomeArquivo}">
            </div>
        `).join('');

        // Carrega e exibe o emblema salvo no gameState
        atualizarPreviewEmblema();
    }

    // Função para carregar um SVG e aplicar a cor
    async function fetchSvgText(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`SVG não encontrado: ${url}`);
            return await response.text();
        } catch (error) {
            console.error(error);
            return ''; // Retorna uma string vazia em caso de erro
        }
    }



    // Esta função foi redesenhada para ser mais robusta
    async function renderizarEmblema(containerElement, emblemaConfig) {
        if (!containerElement || !emblemaConfig) {
            if (containerElement) containerElement.innerHTML = '';
            return;
        }

        containerElement.innerHTML = '';
        containerElement.style.backgroundColor = emblemaConfig.corFundo;

        const [formaSvgText, iconeSvgText] = await Promise.all([
            fetchSvgText(`img/emblemas/formas/${emblemaConfig.forma}`),
            fetchSvgText(`img/emblemas/icones/${emblemaConfig.icone}`)
        ]);

        // --- FUNÇÃO INTERNA PARA "LIMPAR" O SVG ---
        const sanitizarSvg = (svgText) => {
            if (!svgText) return '';
            // 1. Remove width e height fixos
            let sanitized = svgText.replace(/ width="[^"]*"/g, '').replace(/ height="[^"]*"/g, '');
            // 2. Garante que o SVG seja flexível
            sanitized = sanitized.replace('<svg', '<svg width="100%" height="100%"');
            return sanitized;
        };

        const formaDiv = document.createElement('div');
        const iconeDiv = document.createElement('div');

        // Usa a função para limpar o SVG antes de injetá-lo
        formaDiv.innerHTML = sanitizarSvg(formaSvgText);
        iconeDiv.innerHTML = sanitizarSvg(iconeSvgText);

        const iconeNaFrente = emblemaConfig.iconeNaFrente !== false;
        const escalaIcone = emblemaConfig.escalaIcone || 0.7;

        Object.assign(formaDiv.style, { position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', pointerEvents: 'none', zIndex: iconeNaFrente ? 1 : 2 });
        Object.assign(iconeDiv.style, { position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', pointerEvents: 'none', zIndex: iconeNaFrente ? 2 : 1, transform: `scale(${escalaIcone})` });

        containerElement.appendChild(formaDiv);
        containerElement.appendChild(iconeDiv);

        formaDiv.querySelectorAll('svg path, svg rect, svg circle, svg polygon').forEach(shape => shape.setAttribute('fill', emblemaConfig.corForma));
        iconeDiv.querySelectorAll('svg path, svg rect, svg circle, svg polygon').forEach(shape => shape.setAttribute('fill', emblemaConfig.corIcone));
    }



    // Em script.js, SUBSTITUA a função 'renderAbaMarketing' inteira por esta versão corrigida.

    function renderAbaMarketing() {
        const container = document.getElementById('marketing-items-container');
        if (!container) return;

        const emblemaMarketingContainer = document.getElementById('emblema-display-marketing');
        if(emblemaMarketingContainer) renderizarEmblema(emblemaMarketingContainer, gameState.escuderia.emblema);

        container.innerHTML = Object.entries(catalogoMarketing).map(([nome, itemCatalogo]) => {
            const itemJogo = gameState.marketing[nome];

            if (itemJogo.desbloqueado) {
                const producaoBloqueada = itemJogo.inventario > 0;
                const tamanho = itemJogo.tamanhoIcone || { width: 50, height: 50 };
                const posicao = itemJogo.posicaoIcone || { top: 25, left: 25 };

                const controlesProducaoHtml = producaoBloqueada
                ? ` <div class="item-controles">
                        <p style="text-align: center; color: #8a6d3b; background-color: #fffde7; padding: 1rem; border-radius: 4px;">
                            <strong>Produção pausada.</strong><br>Venda o estoque atual para poder produzir um novo lote.
                        </p>
                    </div>`
                : ` <div class="item-controles">
                        <div class="input-group">
                            <input type="number" id="qtd-${nome}" placeholder="Qtd. para produzir" min="1" data-action="calcular-custo" data-item-nome="${nome}">
                            <button class="btn-marketing btn-produzir-item" data-action="produzir-marketing" data-item-nome="${nome}">Produzir</button>
                        </div>
                        <div class="custo-total-display" id="custo-total-${nome}">Custo Total: R$ 0</div>
                    </div>`;

                // CARD PARA ITEM DESBLOQUEADO
                return `
                    <div class="marketing-item-card" data-item-nome="${nome}">

                        <div class="item-imagem" style="background-image: url('${itemCatalogo.img}'); position: relative;">

                            <div id="emblema-container-${nome}" class="item-imagem-emblema draggable"
                                 style="position: absolute; width: ${tamanho.width}%; height: ${tamanho.height}%; top: ${posicao.top}%; left: ${posicao.left}%; cursor: grab;">
                                 </div>

                            <div style="position: absolute; bottom: 5px; right: 5px; display: flex; gap: 5px; background-color: rgba(0,0,0,0.4); padding: 5px; border-radius: 5px; z-index: 5;">
                                <button class="btn-icone-control" data-action="aumentar-icone" data-item-nome="${nome}">+</button>
                                <button class="btn-icone-control" data-action="diminuir-icone" data-item-nome="${nome}">-</button>
                            </div>
                        </div>
                        <h4>${nome}</h4>
                        <div class="item-info">
                            <p><span>Em Estoque:</span> <strong>${itemJogo.inventario}</strong></p>
                            <p><span>Custo p/ Produzir:</span> <strong>R$ ${itemCatalogo.custo_producao.toLocaleString('pt-BR')}</strong></p>
                        </div>
                        <div class="item-controles">
                            <div class="input-group">
                                <label for="preco-${nome}">Preço Venda (mín. ${itemCatalogo.preco_venda_minimo}):</label>
                                <input type="number" id="preco-${nome}" value="${itemJogo.preco_venda_definido}" min="${itemCatalogo.preco_venda_minimo}" data-action="definir-preco" data-item-nome="${nome}" ${producaoBloqueada ? 'disabled' : ''}>
                            </div>
                        </div>
                        ${controlesProducaoHtml}
                    </div>
                `;
            } else {
                // CARD PARA ITEM BLOQUEADO (sem alterações)
                return `
                     <div class="marketing-item-card locked" data-item-nome="${nome}">
                        <div class="item-imagem" style="background-image: url('${itemCatalogo.img}');">
                             <div class="item-imagem-emblema" style="width: 50%; height: 50%; position: relative; left: 25%; top: 25%;"></div>
                        </div>
                        <h4>${nome} (Bloqueado)</h4>
                        <p style="font-size: 0.9em; text-align: center; flex-grow: 1;">Desbloqueie para começar a vender e aumentar a receita.</p>
                        <div class="item-controles">
                             <button class="btn-marketing btn-desbloquear-item" data-action="desbloquear-marketing" data-item-nome="${nome}">
                                Desbloquear (R$ ${itemCatalogo.custo_desbloqueio.toLocaleString('pt-BR')})
                             </button>
                        </div>
                    </div>
                `;
            }
        }).join('');

        // Loop final para chamar a função renderizarEmblema
        Object.keys(catalogoMarketing).forEach(nome => {
            const cardElement = container.querySelector(`.marketing-item-card[data-item-nome="${nome}"]`);
            if (cardElement) {
                const emblemaContainer = cardElement.querySelector('.item-imagem-emblema');
                if (emblemaContainer) {
                    renderizarEmblema(emblemaContainer, gameState.escuderia.emblema);
                }
            }
        });
    }





    function renderAbaMarketing() {
        const container = document.getElementById('marketing-items-container');
        if (!container) return;

        const emblemaMarketingContainer = document.getElementById('emblema-display-marketing');
        if(emblemaMarketingContainer) renderizarEmblema(emblemaMarketingContainer, gameState.escuderia.emblema);


        container.innerHTML = Object.entries(catalogoMarketing).map(([nome, itemCatalogo]) => {
            const itemJogo = gameState.marketing[nome];

            if (itemJogo.desbloqueado) {
                const producaoBloqueada = itemJogo.inventario > 0;

                // Lê os dados de personalização do ícone do gameState
                const tamanho = itemJogo.tamanhoIcone || { width: 50, height: 50 };
                const posicao = itemJogo.posicaoIcone || { top: 25, left: 25 };

                const controlesProducaoHtml = producaoBloqueada
                ? ` <div class="item-controles">
                        <p style="text-align: center; color: #8a6d3b; background-color: #fffde7; padding: 1rem; border-radius: 4px;">
                            <strong>Produção pausada.</strong><br>Venda o estoque atual para poder produzir um novo lote.
                        </p>
                    </div>`
                : ` <div class="item-controles">
                        <div class="input-group">
                            <input type="number" id="qtd-${nome}" placeholder="Qtd. para produzir" min="1" data-action="calcular-custo" data-item-nome="${nome}">
                            <button class="btn-marketing btn-produzir-item" data-action="produzir-marketing" data-item-nome="${nome}">Produzir</button>
                        </div>
                        <div class="custo-total-display" id="custo-total-${nome}">Custo Total: R$ 0</div>
                    </div>`;

                // CARD PARA ITEM DESBLOQUEADO
                return `
                    <div class="marketing-item-card" data-item-nome="${nome}">
                        <div class="item-imagem" style="background-image: url('${itemCatalogo.img}');">

                            <div id="emblema-container-${nome}" class="item-imagem-emblema draggable"
                                 style="width: ${tamanho.width}%; height: ${tamanho.height}%; top: ${posicao.top}%; left: ${posicao.left}%; cursor: grab;">
                            </div>

                            <div style="position: absolute; bottom: 5px; right: 5px; display: flex; gap: 5px; background-color: rgba(0,0,0,0.4); padding: 5px; border-radius: 5px;">
                                <button class="btn-icone-control" data-action="aumentar-icone" data-item-nome="${nome}">+</button>
                                <button class="btn-icone-control" data-action="diminuir-icone" data-item-nome="${nome}">-</button>
                            </div>

                        </div>
                        <h4>${nome}</h4>
                        <div class="item-info">
                            <p><span>Em Estoque:</span> <strong>${itemJogo.inventario}</strong></p>
                            <p><span>Custo p/ Produzir:</span> <strong>R$ ${itemCatalogo.custo_producao.toLocaleString('pt-BR')}</strong></p>
                        </div>
                        <div class="item-controles">
                            <div class="input-group">
                                <label for="preco-${nome}">Preço Venda (mín. ${itemCatalogo.preco_venda_minimo}):</label>
                                <input type="number" id="preco-${nome}" value="${itemJogo.preco_venda_definido}" min="${itemCatalogo.preco_venda_minimo}" data-action="definir-preco" data-item-nome="${nome}" ${producaoBloqueada ? 'disabled' : ''}>
                            </div>
                        </div>
                        ${controlesProducaoHtml}
                    </div>
                `;
            } else {
                // CARD PARA ITEM BLOQUEADO (sem alterações)
                return `
                    <div class="marketing-item-card locked" data-item-nome="${nome}">
                        <div class="item-imagem" style="background-image: url('${itemCatalogo.img}');">
                             <div class="item-imagem-emblema" style="width: 50%; height: 50%;"></div>
                        </div>
                        <h4>${nome} (Bloqueado)</h4>
                        <div class="item-info">
                            <p>Desbloqueie este item para começar a vender e aumentar a receita da sua equipe.</p>
                        </div>
                        <div class="item-controles">
                             <button class="btn-marketing btn-desbloquear-item" data-action="desbloquear-marketing" data-item-nome="${nome}">
                                Desbloquear (R$ ${itemCatalogo.custo_desbloqueio.toLocaleString('pt-BR')})
                             </button>
                        </div>
                    </div>
                `;
            }
        }).join('');

        // Após criar o HTML, renderiza os emblemas dentro dos containers corretos
        Object.keys(catalogoMarketing).forEach(nome => {
            const itemJogo = gameState.marketing[nome];
            if (itemJogo.desbloqueado) {
                const emblemaContainer = document.getElementById(`emblema-container-${nome}`);
                if (emblemaContainer) {
                    renderizarEmblema(emblemaContainer, gameState.escuderia.emblema);
                }
            } else {
                const cardElement = container.querySelector(`.marketing-item-card.locked[data-item-nome="${nome}"]`);
                if (cardElement) {
                    const emblemaContainer = cardElement.querySelector('.item-imagem-emblema');
                    if (emblemaContainer) {
                        renderizarEmblema(emblemaContainer, gameState.escuderia.emblema);
                    }
                }
            }
        });
    }




    function atualizarPreviewEmblema() {
        const previewContainer = document.getElementById('preview-emblema');
        if (!previewContainer) return;

        const emblemaAtual = gameState.escuderia.emblema;
        if (!emblemaAtual) return;

        // --- 1. Atualiza os Controles da UI (com a nova verificação) ---
        const escala = emblemaAtual.escalaIcone || 0.7;
        const iconeEstaNaFrente = emblemaAtual.iconeNaFrente !== false;

        const corFundoInput = document.getElementById('cor-fundo');
        // VERIFICAÇÃO: Se a cor for 'transparent', o input de cor recebe um valor padrão para não quebrar.
        if (emblemaAtual.corFundo === 'transparent') {
            corFundoInput.value = '#f0f2f5'; // Um cinza claro padrão
        } else {
            corFundoInput.value = emblemaAtual.corFundo;
        }

        document.getElementById('cor-forma').value = emblemaAtual.corForma;
        document.getElementById('cor-icone').value = emblemaAtual.corIcone;
        document.getElementById('escala-icone').value = escala * 100;
        document.getElementById('escala-icone-valor').textContent = Math.round(escala * 100);
        document.getElementById('btn-trocar-camada').textContent = iconeEstaNaFrente ? 'Mover Ícone para Trás' : 'Trazer Ícone para Frente';

        document.querySelectorAll('.seletor-item').forEach(item => {
            const isFormaAtiva = item.dataset.tipo === 'forma' && item.dataset.valor === emblemaAtual.forma;
            const isIconeAtivo = item.dataset.tipo === 'icone' && item.dataset.valor === emblemaAtual.icone;
            item.classList.toggle('active', isFormaAtiva || isIconeAtivo);
        });

        // --- 2. Renderiza o Emblema ---
        // A função renderizarEmblema já aceita 'transparent' como valor de cor, então não precisa mudar.
        renderizarEmblema(previewContainer, emblemaAtual);
    }


    function renderGaragem() {
        const emblemaCarroContainer = document.getElementById('emblema-display-carro');
        renderizarEmblema(emblemaCarroContainer, gameState.escuderia.emblema);
        const selectorNav = document.querySelector('.car-selector-nav');
        if (!selectorNav) return;
        document.querySelectorAll('.car-selector-btn').forEach(btn => btn.classList.toggle('active', parseInt(btn.dataset.carIndex) === garagemState.carroSelecionadoIndex));
        const slotsContainer = document.getElementById('car-slots-container');
        const carro = gameState.carros[garagemState.carroSelecionadoIndex];
        const slotTypes = { motor: 'Motor', chassi: 'Chassi', asaDianteira: 'Asa Dianteira', asaTraseira: 'Asa Traseira', suspensao: 'Suspensão' };
        slotsContainer.innerHTML = Object.entries(slotTypes).map(([key, nome]) => {
            const peca = gameState.todasAsPecas.find(p => p.instanceId === carro.pecas[key]);
            const partInfoHtml = peca ? `<div class="part-info"><p class="part-name">${peca.nome} (Nvl ${peca.nivel})</p>${gerarHtmlAtributosPeca(peca)}</div>` : `<div class="empty-slot">Slot Vazio</div>`;
            return `<div class="slot-card ${peca ? 'equipado' : 'vazio'}"><h4>${nome}</h4>${partInfoHtml}<button class="btn-trocar-peca" data-slot-key="${key}">Equipar / Trocar</button></div>`;
        }).join('');
        const inventoryContainer = document.getElementById('inventory-columns-container');
        const pecasEquipadasIds = new Set(gameState.carros.flatMap(c => Object.values(c.pecas)));
        const pecasAgrupadas = gameState.todasAsPecas
            .filter(p => !pecasEquipadasIds.has(p.instanceId))
            .reduce((acc, peca) => {
                (acc[peca.tipo] = acc[peca.tipo] || []).push(peca);
                return acc;
            }, {});
        inventoryContainer.innerHTML = Object.values(slotTypes).map(tipo => {
            const pecasDaColuna = (pecasAgrupadas[tipo] || []).sort((a, b) => b.nivel - a.nivel);
            const pecasHtml = pecasDaColuna.length > 0
                ? pecasDaColuna.map(peca => `<div class="peca-card"><h5>${peca.nome} (Nvl ${peca.nivel})</h5>${gerarHtmlAtributosPeca(peca)}<div class="card-actions"><button class="btn-vender-peca" data-instance-id="${peca.instanceId}">Vender (R$ ${Math.floor(calcularPrecoPeca(peca) * 0.7).toLocaleString('pt-BR')})</button></div></div>`).join('')
                : `<p style="text-align: center; font-size: 0.9em; color: #888;">Nenhuma peça</p>`;
            return `<div class="inventory-column"><h4>${tipo}</h4>${pecasHtml}</div>`;
        }).join('');
    }






    function gerarCardPilotoHtml(piloto, cargo, vagaAberta) {
        const gerarHtmlAtributo = (label, valorAtual, valorBase) => {
            const valorAtualInt = Math.round(valorAtual);
            const valorBaseInt = Math.round(valorBase);
            let classe = '';
            if (valorAtualInt < valorBaseInt) classe = 'decline';
            if (valorAtualInt > valorBaseInt) classe = 'growth';
            return `<p><span>${label}:</span> <strong class="atributo-valor ${classe}">${valorAtualInt}</strong></p>`;
        };

        let cargoHtml = '';
        if (cargo) {
            cargoHtml = `<div class="piloto-cargo-tag">${cargo}</div>`;
        }

        let actionButtonHtml = '';
        const classeExtra = piloto.status === 'Reserva' ? 'reserva' : '';
        const corEquipe = getCorDaEquipe(piloto.status);

        if (piloto.status === 'Jogador' || piloto.status === 'Reserva') {
            if (piloto.idade >= 35) {
                actionButtonHtml += `<button class="btn-dispensar-piloto" data-action="dispensar-piloto" data-piloto-id="${piloto.id}" style="background-color: #ffc107; color: #333;">Aposentar</button>`;
            } else {
                actionButtonHtml += `<button class="btn-dispensar-piloto" data-action="dispensar-piloto" data-piloto-id="${piloto.id}">Dispensar</button>`;
            }
            if (piloto.status === 'Reserva' && vagaAberta) {
                actionButtonHtml += `<button class="btn-contratar-piloto" data-action="promover-piloto" data-piloto-id="${piloto.id}">Promover</button>`;
            }
        } else if (piloto.status === 'Disponível') {
            actionButtonHtml = `<button class="btn-contratar-piloto" data-action="contratar-piloto" data-piloto-id="${piloto.id}">Contratar</button>`;
        } else if (piloto.status !== 'Indisponível') {
            actionButtonHtml = `<div class="piloto-equipe-tag" style="background-color: ${corEquipe};">Equipe: ${piloto.status}</div>`;
        }

        let infoFinanceiraHtml = '';
        // ... (o resto desta função não precisa de alterações)
        if (piloto.status === 'Disponível') {
            const precoContrato = (piloto.precoContrato || 0).toLocaleString('pt-BR');
            infoFinanceiraHtml = `<p><span>Contrato:</span> <strong>R$ ${precoContrato}</strong></p>`;
        } else if (piloto.status === 'Jogador' || piloto.status === 'Reserva') {
            const salario = (piloto.salario || 0).toLocaleString('pt-BR');
            infoFinanceiraHtml = `<p><span>Salário/Corrida:</span> <strong>R$ ${salario}</strong></p>`;
        } else {
            infoFinanceiraHtml = `<p><span>Contrato:</span> <strong>?</strong></p>`;
        }
        const baseHabilidade = piloto.atributosBase ? piloto.atributosBase.habilidade : piloto.habilidade;
        const baseConsistencia = piloto.atributosBase ? piloto.atributosBase.consistencia : piloto.consistencia;
        const baseGerenciamentoPneus = piloto.atributosBase ? piloto.atributosBase.gerenciamentoPneus : piloto.gerenciamentoPneus;

        // Retornando à estrutura de coluna única
        return `
            <div class="piloto-card ${classeExtra}" style="border-left-color: ${corEquipe};">
                ${cargoHtml}
                <h4>${piloto.nome} <span style="font-weight:normal; color: #666;">(${piloto.idade} anos)</span></h4>
                <div class="atributos">
                    ${gerarHtmlAtributo('Habilidade', piloto.habilidade, baseHabilidade)}
                    ${gerarHtmlAtributo('Consistência', piloto.consistencia, baseConsistencia)}
                    ${gerarHtmlAtributo('Gerenc. Pneus', piloto.gerenciamentoPneus, baseGerenciamentoPneus)}
                    ${infoFinanceiraHtml}
                </div>
                <div class="card-actions">
                    ${actionButtonHtml}
                </div>
            </div>`;
    }





    function renderAbaPilotos() {
        const meusPilotosContainer = document.getElementById('meus-pilotos-container');
        const mercadoPilotosContainer = document.getElementById('mercado-pilotos-container');
        const gridAtivoContainer = document.getElementById('grid-ativo-container');
        const aposentadosContainer = document.getElementById('aposentados-container');

        if (!meusPilotosContainer || !mercadoPilotosContainer || !gridAtivoContainer || !aposentadosContainer) return;

        // Limpa todos os containers no início
        meusPilotosContainer.innerHTML = '';
        mercadoPilotosContainer.innerHTML = '';
        gridAtivoContainer.innerHTML = '';
        aposentadosContainer.innerHTML = '';

        const meusPilotos = gameState.pilotos.filter(p => p.status === 'Jogador');
        const pilotoReserva = gameState.pilotos.find(p => p.status === 'Reserva');
        const vagaNaEquipePrincipal = meusPilotos.length < 2;
        const treinadorContratado = gameState.escuderia.especialistas.find(e => e.tipo === 'Treinador de Pilotos');

        // --- LÓGICA UNIFICADA E CORRIGIDA PARA RENDERIZAR OS CARDS DA EQUIPE ---

        // 1. Renderiza o Piloto 1 (ou sua vaga)
        if (meusPilotos[0]) {
            meusPilotosContainer.innerHTML += gerarCardPilotoHtml(meusPilotos[0], 'Piloto 1');
        } else {
            meusPilotosContainer.innerHTML += '<div class="piloto-card" style="display: flex; align-items: center; justify-content: center; color: #888; border-style: dashed;"><h4>Vaga para Piloto 1</h4></div>';
        }

        // 2. Renderiza o Piloto 2 (ou sua vaga)
        if (meusPilotos[1]) {
            meusPilotosContainer.innerHTML += gerarCardPilotoHtml(meusPilotos[1], 'Piloto 2');
        } else {
            meusPilotosContainer.innerHTML += '<div class="piloto-card" style="display: flex; align-items: center; justify-content: center; color: #888; border-style: dashed;"><h4>Vaga para Piloto 2</h4></div>';
        }

        // 3. Renderiza o Piloto Reserva (ou sua vaga)
        if (pilotoReserva) {
            meusPilotosContainer.innerHTML += gerarCardPilotoHtml(pilotoReserva, 'Reserva', vagaNaEquipePrincipal);
        } else {
            if (treinadorContratado) {
                meusPilotosContainer.innerHTML += '<div class="piloto-card vaga-reserva"><div><h4>Vaga de Piloto Reserva</h4><p style="font-size: 0.9em;">Contrate um piloto com menos de 23 anos do mercado.</p></div></div>';
            } else {
                meusPilotosContainer.innerHTML += '<div class="piloto-card vaga-reserva"><div><h4>Vaga Bloqueada</h4><p style="font-size: 0.9em;">Contrate um Treinador de Pilotos para desbloquear esta vaga.</p></div></div>';
            }
        }

        // 4. Renderiza o card do Emblema
        meusPilotosContainer.innerHTML += `
            <div class="equipe-emblema-card">
                <div id="emblema-display-pilotos-aba"></div>
            </div>
        `;

        // --- FIM DA LÓGICA UNIFICADA ---

        // Renderiza o resto das listas de pilotos (mercado, I.A., aposentados)
        const pilotosDeMercado = gameState.pilotos.filter(p => p.status === 'Disponível');
        pilotosDeMercado.forEach(piloto => {
            mercadoPilotosContainer.innerHTML += gerarCardPilotoHtml(piloto);
        });

        const pilotosAtivosIA = gameState.pilotos.filter(p => p.status !== 'Jogador' && p.status !== 'Reserva' && p.status !== 'Disponível' && p.status !== 'Indisponível');
        pilotosAtivosIA.sort((a,b) => b.habilidade - a.habilidade).forEach(piloto => {
            gridAtivoContainer.innerHTML += gerarCardPilotoHtml(piloto);
        });

        const pilotosAposentados = gameState.galeria.hallDaFama;
        if (pilotosAposentados.length > 0) {
            pilotosAposentados.forEach(entrada => {
                aposentadosContainer.innerHTML += gerarCardAposentadoHtml(entrada);
            });
        } else {
            aposentadosContainer.innerHTML = '<p style="text-align: center;">Nenhum piloto da sua equipe se aposentou ainda.</p>';
        }

        // Renderiza os emblemas nos cards corretos (tanto nos cards dos pilotos quanto no card de emblema)
        meusPilotos.forEach(piloto => {
            const container = document.getElementById(`emblema-piloto-${piloto.id}`);
            if (container) renderizarEmblema(container, gameState.escuderia.emblema);
        });
        if (pilotoReserva) {
            const container = document.getElementById(`emblema-piloto-${pilotoReserva.id}`);
            if (container) renderizarEmblema(container, gameState.escuderia.emblema);
        }
        const emblemaContainerPrincipal = document.getElementById('emblema-display-pilotos-aba');
        if (emblemaContainerPrincipal) {
            renderizarEmblema(emblemaContainerPrincipal, gameState.escuderia.emblema);
        }
    }




    // EM script.js
    function renderPlayerCarStatus() {
        const meusPilotosIds = gameState.carros.map(c => c.pilotoId).filter(id => id !== null);

        for (let i = 0; i < 2; i++) {
            const cardContainer = document.getElementById(`player-car-${i + 1}-status`);
            if (!cardContainer) continue;

            const pilotoId = meusPilotosIds[i];
            if (!pilotoId) { cardContainer.innerHTML = ''; cardContainer.classList.add('hidden'); continue; }

            const participante = raceData.participantes.find(p => p.piloto.id === pilotoId);
            if (!participante) continue;

            // <-- INÍCIO DA ALTERAÇÃO -->
            // Adiciona a estrutura da barra de ERS se ela não existir
            if (!cardContainer.querySelector('.ers-bar-container')) {
                cardContainer.innerHTML = `
                    <img src="img/carf1.png" alt="Carro" class="car-image-compact">
                    <div class="car-info-compact">
                        <h4>${participante.piloto.nome}</h4>
                        <p class="pneu-info-line">
                            <span>Pneu:</span>
                            <span class="tyre-compound-display"></span>
                            <span class="tire-lap-count"></span>
                        </p>
                        <div class="tire-wear-bar-single">
                            <div class="tire-wear-bar-fill-single"></div>
                        </div>
                        <div class="ers-bar-container">
                            <span class="ers-label">ERS</span>
                            <div class="ers-bar-fill"></div>
                        </div>
                    </div>
                `;
            }

            const durabilidade = Math.max(0, participante.durabilidadePneu);
            let corBarra;
            if (durabilidade > 75) corBarra = '#3c9a3c';
            else if (durabilidade > 50) corBarra = '#fca311';
            else if (durabilidade > 30) corBarra = '#e63946';
            else corBarra = '#8a2be2';

            const fillBar = cardContainer.querySelector('.tire-wear-bar-fill-single');
            if(fillBar) {
                fillBar.style.width = `${durabilidade}%`;
                fillBar.style.backgroundColor = corBarra;
            }

            const tireCompoundSpan = cardContainer.querySelector('.tyre-compound-display');
            if (tireCompoundSpan) {
                tireCompoundSpan.textContent = participante.pneuAtual.charAt(0).toUpperCase();
                tireCompoundSpan.className = `tyre-indicator tyre-${participante.pneuAtual} tyre-compound-display`;
            }

            const tireLapCountSpan = cardContainer.querySelector('.tire-lap-count');
            if (tireLapCountSpan) {
                tireLapCountSpan.textContent = `(${participante.voltasNoPneuAtual}v) - ${durabilidade.toFixed(0)}%`;
            }
            if (participante.ers) {
                const ersFillBar = cardContainer.querySelector('.ers-bar-fill');
                if (ersFillBar) {
                    ersFillBar.style.width = `${participante.ers.bateria}%`;
                    ersFillBar.classList.toggle('full', participante.ers.ativo || participante.ers.bateria >= 100);
                }
            }
        }
    }

    // Função auxiliar para determinar a cor da barra de desgaste
    function getTyreWearColor(durabilidade) {
        if (durabilidade > 70) return 'green';
        if (durabilidade > 40) return 'orange';
        return 'red';
    }




    function renderAbaCorrida() {
        const corridaDiv = document.getElementById('corrida');
        if (!corridaDiv) return;

        const isSeasonOver = gameState.campeonato.corridaAtualIndex >= calendarioCorridas.length;
        if (isSeasonOver) {
            corridaDiv.innerHTML = `<div class="corrida-start-container" style="text-align:center;"><h2>Temporada de ${gameState.campeonato.ano} Concluída!</h2><p>Visite a Aba Campeonato para ver a classificação final.</p><button id="btn-iniciar-nova-temporada" class="btn-corrida btn-real">Iniciar Temporada de ${gameState.campeonato.ano + 1}</button></div>`;
            return;
        }

        corridaDiv.innerHTML = `
            <h2>Próxima Corrida: <span id="pista-nome"></span></h2>
            <div class="corrida-layout-3col">
                <div class="setup-coluna" id="coluna-esquerda-corrida">
                    <div id="info-pre-corrida-esquerda">
                        <h3>Informações da Pista</h3>
                        <div id="info-pista" class="info-box"></div>
                        <h3>Nossos Carros</h3>
                        <div id="nossos-carros-corrida"></div>
                    </div>

                </div>

                <div class="corrida-start-container">
                    <div id="pre-race-view">
                        <h3 id="corrida-titulo-pre-race">Pronto para Correr</h3>
                        <div id="race-options-container">
                            <button id="btn-corrida-real" class="btn-corrida btn-real">Tempo Real (10s/volta)</button>
                            <button id="btn-corrida-rapida" class="btn-corrida btn-rapida">Rápido (2s/volta)</button>
                        </div>
                        <div id="grid-formation-container" class="hidden"></div>
                    </div>
                    <div id="live-race-view" class="hidden">

                        <div class="estilo-carros"><div id="player-car-1-status" class="player-car-status-card compact hidden"></div><div id="track-canvas-container"><canvas id="track-canvas"></canvas></div><div id="player-car-2-status" class="player-car-status-card compact hidden"></div></div>
                        <div id="radio-messages-container">
                            <div id="radio-display-box" class="radio-message"></div>
                        </div>
                        <button id="btn-fechar-resultados" class="btn-corrida btn-fechar hidden">Ver Próxima Corrida</button>
                        <h3 id="display-volta"></h3>
                        <table id="tabela-resultados">
                            <thead>
                                <tr><th>Pos</th><th>Piloto</th><th>Equipe</th><th>Paradas</th><th>Pneu</th><th>Últ. Volta</th><th>Volta Rápida</th><th>Gap</th></tr>
                            </thead>
                            <tbody></tbody>
                        </table>

                    </div>
                </div>

                <div class="setup-coluna" id="coluna-direita-corrida">
                    <div id="info-pre-corrida-direita">
                        <h3>Estratégia de Corrida</h3>
                        <div id="strategy-container"></div>
                    </div>

                </div>
            </div>
        `;

        // Atualiza o conteúdo estático
        const pista = calendarioCorridas[gameState.campeonato.corridaAtualIndex];
        document.getElementById('pista-nome').textContent = `${pista.nome} (${gameState.campeonato.corridaAtualIndex + 1}/${calendarioCorridas.length})`;
        document.getElementById('info-pista').innerHTML = `<img src="${pista.imagem}" alt="Circuito" class="info-pista-imagem"><p>Voltas: ${pista.voltas}</p><p>Foco em Motor: ${pista.demandaMotor * 100}%</p><p>Foco em Aerodinâmica: ${pista.demandaAero * 100}%</p><p>Foco em Aderência: ${pista.demandaAderencia * 100}%</p>`;
        document.getElementById('nossos-carros-corrida').innerHTML = gameState.carros.map(carro => {
            const piloto = gameState.pilotos.find(p => p.id === carro.pilotoId);
            const pilotoNome = piloto ? piloto.nome : "VAGO";
            const atributos = calcularAtributosCarro(carro);
            return `<div class="carro-resumo"><h4>${pilotoNome}</h4><p>Pot: ${atributos.potencia} | Aero: ${atributos.aerodinamica} | Adr: ${atributos.aderencia} | Conf: ${atributos.confiabilidade}%</p></div>`;
        }).join('');
        renderEstrategiaUI();
    }



    function renderTabelaAoVivo() {
        document.getElementById('display-volta').textContent = `VOLTA ${raceData.voltaAtual} / ${raceData.totalVoltas}`;
        const tabelaBody = document.querySelector("#tabela-resultados tbody");
        if (!tabelaBody) return;

        const lider = raceData.participantes.find(p => p.tempoTotal !== Infinity) || raceData.participantes[0];
        renderPlayerCarStatus();
        tabelaBody.innerHTML = raceData.participantes.map((res, index) => {
            const pos = index + 1;
            const cor = getCorDaEquipe(res.equipe);

            let gapLider = res.tempoTotal - lider.tempoTotal;
            let gapAnterior = index > 0 ? res.tempoTotal - raceData.participantes[index - 1].tempoTotal : 0;

            res.posicao = pos; // Salva a posição atual no objeto do participante
            res.gapParaFrente = gapAnterior; // Salva o gap para o carro da frente

            // Identificador único do piloto
            const idPiloto = res.piloto.id || res.piloto.nome;

            // Comparação com o gap anterior
            let corGap = '';
            if (pos > 1 && res.tempoTotal !== Infinity) {
                const gapAnteriorAnterior = gapsAnteriores[idPiloto];
                if (gapAnteriorAnterior !== undefined) {
                    if (gapAnterior < gapAnteriorAnterior) {
                        corGap = 'green';
                    } else if (gapAnterior > gapAnteriorAnterior) {
                        corGap = 'red';
                    }
                }
                gapsAnteriores[idPiloto] = gapAnterior;
            }

            // Formatação do gapDisplay
            let gapDisplay;
            if (res.tempoTotal === Infinity) {
                gapDisplay = "DNF";
            } else if (pos === 1) {
                gapDisplay = "Líder";
            } else if (pos === 2) {
                gapDisplay = `(<span style="color:${corGap}">${gapAnterior.toFixed(3)}</span>)`;
            } else {
                gapDisplay = `${gapLider.toFixed(3)}s (<span style="color:${corGap}">${gapAnterior.toFixed(3)}</span>)`;
            }

            const celulaPneuHtml = `<div class="pneu-cell-container"><span class="tyre-indicator tyre-${res.pneuAtual}">${res.pneuAtual.charAt(0).toUpperCase()}</span> <span class="pneu-lap-counter">(${res.voltasNoPneuAtual}v)</span></div>`;
            const isFastestLap = res.piloto.nome === raceData.pilotoMelhorVolta && raceData.melhorVolta !== Infinity;


            return `<tr class="${res.isPlayer ? 'player-row' : ''}" style="border-left-color: ${cor};">
                <td>${pos}</td>
                <td>${res.piloto.nome}${isFastestLap ? '<span class="fastest-lap-icon">⏱️</span>' : ''}</td>
                <td>${res.equipe}</td>
                <td>${res.paradas}</td>
                <td>${celulaPneuHtml}</td>
                <td><span class="lap-time">${res.ultimaVolta || '---'}</span></td>
                <td class="${isFastestLap ? 'fastest-lap-cell' : ''}"><span class="lap-time">${res.melhorVoltaPessoal === Infinity ? '---' : formatLapTime(res.melhorVoltaPessoal)}</span></td>
                <td><span class="lap-time">${gapDisplay}</span></td>
            </tr>`;
        }).join('');
        if (raceData.voltaAtual === 2) {
            const modeButtons = document.querySelectorAll('.btn-mode');
            // Verifica se os botões estão de fato desabilitados antes de ativá-los.
            // Isso impede que este código seja executado desnecessariamente.
            if (modeButtons.length > 0 && modeButtons[0].disabled) {
                modeButtons.forEach(btn => {
                    btn.disabled = false;
                });
            }
        }
    }


    function renderAbaCampeonato() {
        const anoDisplay = document.querySelectorAll('.campeonato-ano-display');
        if (anoDisplay) anoDisplay.forEach(el => el.textContent = gameState.campeonato.ano);
        renderTabelaClassificacaoPilotos();
        renderTabelaClassificacaoConstrutores();
        renderResultadosCorridas();
    }

    function renderTabelaClassificacaoPilotos() {
        const tabelaBody = document.querySelector("#tabela-classificacao-pilotos tbody");
        if (!tabelaBody) return;

        const classificacaoOrdenada = [...gameState.campeonato.classificacaoPilotos].sort((a, b) => b.pontos - a.pontos);

        // Primeiro, cria o HTML da tabela
        tabelaBody.innerHTML = classificacaoOrdenada.map((piloto, index) => {
            let emblemaHtml = '';
            if (piloto.equipe === gameState.escuderia.nome) {
                emblemaHtml = `<div id="emblema-pilotos-${index}" class="emblema-na-tabela"></div>`;
            }
            return `<tr class="${piloto.equipe === gameState.escuderia.nome ? 'player-row' : ''}" style="border-left: 5px solid ${getCorDaEquipe(piloto.equipe)};">
                        <td>${index + 1}</td>
                        <td>${piloto.piloto}</td>
                        <td>${emblemaHtml}<span>${piloto.equipe}</span></td>
                        <td>${piloto.pontos}</td>
                    </tr>`;
        }).join('');

        // DEPOIS, percorre novamente para renderizar os emblemas nos placeholders
        classificacaoOrdenada.forEach((piloto, index) => {
            if (piloto.equipe === gameState.escuderia.nome) {
                const container = document.getElementById(`emblema-pilotos-${index}`);
                if (container) { // Verifica se o container foi encontrado
                    renderizarEmblema(container, gameState.escuderia.emblema);
                }
            }
        });
    }

    function renderTabelaClassificacaoConstrutores() {
        const tabelaBody = document.querySelector("#tabela-classificacao-construtores tbody");
        if (!tabelaBody) return;

        const classificacaoOrdenada = [...gameState.campeonato.classificacaoConstrutores].sort((a, b) => b.pontos - a.pontos);

        // Primeiro, cria o HTML da tabela
        tabelaBody.innerHTML = classificacaoOrdenada.map((equipe, index) => {
            let emblemaHtml = '';
            if (equipe.equipe === gameState.escuderia.nome) {
                // Cria um placeholder com um ID único para o emblema
                emblemaHtml = `<div id="emblema-construtores-${index}" class="emblema-na-tabela"></div>`;
            }
            return `<tr class="${equipe.equipe === gameState.escuderia.nome ? 'player-row' : ''}" style="border-left: 5px solid ${getCorDaEquipe(equipe.equipe)};">
                        <td>${index + 1}</td>
                        <td>${emblemaHtml}<span>${equipe.equipe}</span></td>
                        <td>${equipe.pontos}</td>
                    </tr>`;
        }).join('');

        // DEPOIS, percorre novamente para renderizar os emblemas nos placeholders
        classificacaoOrdenada.forEach((equipe, index) => {
            if (equipe.equipe === gameState.escuderia.nome) {
                const container = document.getElementById(`emblema-construtores-${index}`);
                if (container) { // Verifica se o container foi encontrado
                    renderizarEmblema(container, gameState.escuderia.emblema);
                }
            }
        });
    }

    function renderResultadosCorridas() {
        const container = document.getElementById('resultados-corridas-container');
        if (!container) return;
        container.innerHTML = gameState.campeonato.resultadosCorridas.map(corrida => {
            const podioHtml = `<ol>${corrida.resultadoFinal.slice(0, 22).map(p => `<li>${p.piloto.nome} (${p.equipe})</li>`).join('')}</ol>`;
            const melhorVoltaHtml = (corrida.melhorVolta && corrida.melhorVolta.piloto) ? `<p class="volta-rapida-info">⏱️ <strong>Volta Rápida:</strong> ${corrida.melhorVolta.piloto} (${formatLapTime(corrida.melhorVolta.tempo)})</p>` : '';
            return `<div class="resultado-corrida-box"><h4>${corrida.nomePista}</h4>${podioHtml}${melhorVoltaHtml}</div>`;
        }).join('');
    }

    function renderEstrategiaUI() {
        const container = document.getElementById('strategy-container');
        if (!container) return;

        container.innerHTML = gameState.carros.map((carro, carroIndex) => {
            const piloto = gameState.pilotos.find(p => p.id === carro.pilotoId);
            const pilotoNome = piloto ? piloto.nome : "VAGO";

            let modoAtual = 'padrão';
            if (animacaoAtiva && raceData.participantes) {
                const participante = raceData.participantes.find(p => p.piloto.id === carro.pilotoId);
                if (participante) {
                    modoAtual = participante.modoAgressividade;
                }
            }

            // Garante que os botões estejam desabilitados se a corrida não estiver em andamento.
            const isRaceInactive = !animacaoAtiva;

            const comandosHtml = `
                <div class="radio-commands-container">
                    <h5>Comandos de Rádio</h5>
                    <div class="radio-commands-buttons">
                        <button class="btn-mode ${modoAtual === 'atacar' ? 'active-mode-atacar' : ''}" data-car-index="${carroIndex}" data-mode="atacar" ${isRaceInactive ? 'disabled' : ''}>Atacar</button>
                        <button class="btn-mode ${modoAtual === 'padrão' ? 'active-mode-padrao' : ''}" data-car-index="${carroIndex}" data-mode="padrão" ${isRaceInactive ? 'disabled' : ''}>Padrão</button>
                        <button class="btn-mode ${modoAtual === 'conservar' ? 'active-mode-conservar' : ''}" data-car-index="${carroIndex}" data-mode="conservar" ${isRaceInactive ? 'disabled' : ''}>Conservar</button>
                    </div>
                </div>
            `;

            const paradaInputs = carro.estrategia.paradas.map((parada, paradaIndex) => `
                <div class="stint-definition">
                    <label>Parada ${paradaIndex + 1}</label>
                    <div class="stint-inputs"><span>Na volta:</span>
                        <input type="number" class="volta-input strategy-control" value="${parada.pararNaVolta}" min="1" data-car-index="${carroIndex}" data-parada-index="${paradaIndex}">
                        <span>Colocar Pneu:</span>
                        <select class="pneu-select-parada strategy-control" data-car-index="${carroIndex}" data-parada-index="${paradaIndex}">
                            <option value="macio" ${parada.colocarPneu === 'macio' ? 'selected' : ''}>Macio</option>
                            <option value="medio" ${parada.colocarPneu === 'medio' ? 'selected' : ''}>Médio</option>
                            <option value="duro" ${parada.colocarPneu === 'duro' ? 'selected' : ''}>Duro</option>
                        </select>
                    </div>
                    <button class="btn-remover-stint strategy-control" data-car-index="${carroIndex}" data-parada-index="${paradaIndex}">X</button>
                </div>`).join('');
            const aviso = !isEstrategiaValida(carro.estrategia) ? `<p class="strategy-warning">Estratégia inválida: é obrigatório usar ao menos 2 tipos de pneu diferentes se houver pit stops.</p>` : '';

            return `<div class="strategy-box">
                        <h4>Carro ${carroIndex + 1} (${pilotoNome})</h4>
                        <div class="stint-definition initial-stint">
                            <label>Pneu Inicial</label>
                            <div class="stint-inputs">
                                <select class="pneu-select-inicial strategy-control" data-car-index="${carroIndex}">
                                    <option value="macio" ${carro.estrategia.pneuInicial === 'macio' ? 'selected' : ''}>Macio</option>
                                    <option value="medio" ${carro.estrategia.pneuInicial === 'medio' ? 'selected' : ''}>Médio</option>
                                    <option value="duro" ${carro.estrategia.pneuInicial === 'duro' ? 'selected' : ''}>Duro</option>
                                </select>
                            </div>
                        </div>
                        ${paradaInputs}
                        <div class="strategy-actions"><button class="btn-add-stint strategy-control" data-car-index="${carroIndex}">+ Adicionar Parada</button></div>
                        ${aviso}
                        ${comandosHtml}
                    </div>`;
        }).join('');
    }

    function renderAbaNegociacoes() {
        const tabelaBody = document.querySelector("#tabela-mercado-pecas tbody");
        if (!tabelaBody) return;
        const tipoFiltro = document.getElementById('filtro-tipo-peca').value;
        const nivelMinFiltro = parseInt(document.getElementById('filtro-nivel-min').value);
        document.getElementById('nivel-min-value').textContent = nivelMinFiltro;
        const pecasFiltradas = gameState.mercadoDePecas.filter(p => (tipoFiltro === 'todos' || p.tipo === tipoFiltro) && p.nivel >= nivelMinFiltro);
        const sortedMarket = [...pecasFiltradas].sort((a, b) => (typeof a[sortState.column] === 'string' ? a[sortState.column].localeCompare(b[sortState.column]) : a[sortState.column] - b[sortState.column]) * (sortState.direction === 'asc' ? 1 : -1));
        tabelaBody.innerHTML = sortedMarket.map(peca => `<tr><td>${peca.nome}</td><td>${peca.tipo}</td><td>${peca.nivel}</td><td class="atributos-cell">${gerarHtmlAtributosPeca(peca)}</td><td>${peca.vendedor}</td><td>R$ ${peca.preco.toLocaleString('pt-BR')}</td><td><button class="btn-comprar" data-instance-id="${peca.instanceId}">Comprar</button></td></tr>`).join('');
        document.querySelectorAll('#tabela-mercado-pecas .sortable-header').forEach(header => {
            header.classList.remove('sort-asc', 'sort-desc');
            if (header.dataset.sort === sortState.column) header.classList.add(`sort-${sortState.direction}`);
        });
    }

    function gerarHtmlAtributosPeca(peca) {
        if (!peca || !peca.atributos) return '';

        // Garante que 'atributosOriginais' exista para compatibilidade com saves antigos
        if (!peca.atributosOriginais) {
            peca.atributosOriginais = JSON.parse(JSON.stringify(peca.atributos));
        }

        const atributosHtml = Object.entries(peca.atributos).map(([attr, val]) => {
            const nomeAtributo = attr.charAt(0).toUpperCase() + attr.slice(1);
            let desgasteHtml = '';
            const originalVal = peca.atributosOriginais[attr];

            // Compara o valor atual com o original para mostrar o desgaste
            if (originalVal && val < originalVal) {
                const diferenca = val - originalVal; // Será um número negativo
                desgasteHtml = ` <span class="desgaste-negativo">(${diferenca})</span>`;
            }

            return `<p><strong>${nomeAtributo}:</strong> ${val}${desgasteHtml}</p>`;
        }).join('');

        // Adiciona a contagem de corridas
        const corridasUsadasHtml = `<p class="desgaste-info"><strong>Corridas Usadas:</strong> ${peca.corridasUsadas || 0}</p>`;

        return `<div class="atributos-card">${atributosHtml}${corridasUsadasHtml}</div>`;
    }

    function processarDesgastePecas() {
        const pecasEquipadasIds = new Set(
            gameState.carros.flatMap(c => Object.values(c.pecas).filter(id => id !== null))
        );

        const nomesPecasDegradadas = [];

        gameState.todasAsPecas.forEach(peca => {
            // Verifica se a peça está equipada em um dos carros
            if (pecasEquipadasIds.has(peca.instanceId)) {
                // Inicializa as propriedades se não existirem (para saves antigos)
                if (peca.corridasUsadas === undefined) {
                    peca.corridasUsadas = 0;
                }
                if (!peca.atributosOriginais) {
                    peca.atributosOriginais = JSON.parse(JSON.stringify(peca.atributos));
                }

                // Incrementa o contador de corridas
                peca.corridasUsadas++;

                // --- INÍCIO DA MODIFICAÇÃO COM AS NOVAS CONDIÇÕES ---

                let intervaloDesgaste;
                const nivelPeca = peca.nivel;

                if (nivelPeca <= 3) { // Níveis 1, 2 e 3
                    intervaloDesgaste = 12;
                } else if (nivelPeca <= 6) { // Níveis 4, 5 e 6
                    intervaloDesgaste = 10;
                } else if (nivelPeca <= 8) { // Níveis 7 e 8
                    intervaloDesgaste = 6;
                } else { // Níveis 9 e 10
                    intervaloDesgaste = 5;
                }

                // Verifica se é hora de aplicar o desgaste com base no intervalo correto
                if (peca.corridasUsadas > 0 && peca.corridasUsadas % intervaloDesgaste === 0) {
                    let foiDegradada = false;
                    for (const attr in peca.atributos) {
                        // Não desgasta a confiabilidade
                        if (attr === 'confiabilidade') continue;

                        // Calcula o percentual de desgaste aleatório (entre 1% e 5%)
                        const percentualDesgaste = (Math.random() * 4 + 1) / 100;
                        // Calcula a redução baseada no atributo original
                        const reducao = Math.ceil(peca.atributosOriginais[attr] * percentualDesgaste);

                        if (reducao > 0) {
                            peca.atributos[attr] = Math.max(1, peca.atributos[attr] - reducao);
                            foiDegradada = true;
                        }
                    }
                    if (foiDegradada) {
                        nomesPecasDegradadas.push(`${peca.nome} (Nvl ${peca.nivel})`);
                    }
                }
                // --- FIM DA MODIFICAÇÃO ---
            }
        });

        // Alerta o jogador sobre as peças que sofreram desgaste
        if (nomesPecasDegradadas.length > 0) {
            setTimeout(() => {
                alert(`Atenção: O uso contínuo causou desgaste nas seguintes peças:\n\n- ${nomesPecasDegradadas.join('\n- ')}`);
            }, 1500); // Pequeno delay para não sobrepor outros alertas de fim de corrida
        }
    }

    function formatLapTime(timeInSeconds) {
        if (typeof timeInSeconds !== 'number' || !isFinite(timeInSeconds)) return '---';
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        const milliseconds = Math.round((timeInSeconds * 1000) % 1000);
        return `${minutes}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(3, '0')}`;
    }
    function renderAbaAutodromo() {
        const container = document.getElementById('autodromo-container');
        if (!container) return;

        container.innerHTML = calendarioCorridas.map(pista => {
            const historicoPista = gameState.historicoAutodromos[pista.nome];

            let recordeHtml = '<p>Nenhum recorde estabelecido.</p>';
            if (historicoPista && historicoPista.recordeVolta.piloto) {
                recordeHtml = `<p class="recorde-volta">
                    ${formatLapTime(historicoPista.recordeVolta.tempo)} - ${historicoPista.recordeVolta.piloto} (${historicoPista.recordeVolta.ano})
                </p>`;
            }

            let tabelaHistoricoHtml = '<h4>Histórico de Corridas</h4><p>Nenhuma corrida realizada neste circuito.</p>';
            if (historicoPista && historicoPista.historicoAnual.length > 0) {
                tabelaHistoricoHtml = `
                    <h4>Histórico de Corridas</h4>
                    <table class="historico-tabela">
                        <thead>
                            <tr>
                                <th>Ano</th>
                                <th>Pódio (1º, 2º, 3º)</th>
                                <th>Pole Position</th>
                                <th>Volta Mais Rápida</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${[...historicoPista.historicoAnual].reverse().map(ano => {
                                const poleInfo = ano.pole ? `${ano.pole.piloto} (${formatLapTime(ano.pole.tempo)})` : 'N/A';
                                const voltaRapidaInfo = ano.voltaRapida ? `${ano.voltaRapida.piloto} (${formatLapTime(ano.voltaRapida.tempo)})` : 'N/A';
                                const podiumInfo = ano.podium ? ano.podium.join(', ') : 'N/A';

                                return `
                                    <tr>
                                        <td>${ano.ano}</td>
                                        <td>${podiumInfo}</td>
                                        <td>${poleInfo}</td>
                                        <td>${voltaRapidaInfo}</td>
                                    </tr>
                                `;
                            }).join('')}
                        </tbody>
                    </table>
                `;
            }

            return `
                <div class="autodromo-card">
                    <img class="autodromo-imagem" src="${pista.imagem || 'https://via.placeholder.com/800x250'}" alt="Foto do circuito ${pista.nome}">
                    <div class="autodromo-header">
                        <h3>${pista.nome}</h3>
                    </div>
                    <div class="autodromo-detalhes">
                        <div class="info-bloco">
                            <h4>Configuração da Pista</h4>
                            <p><strong>Voltas:</strong> ${pista.voltas}</p>
                            <p><strong>Ênfase em Motor:</strong> ${pista.demandaMotor * 100}%</p>
                            <p><strong>Ênfase em Aerodinâmica:</strong> ${pista.demandaAero * 100}%</p>
                            <p><strong>Ênfase em Aderência:</strong> ${pista.demandaAderencia * 100}%</p>
                        </div>
                        <div class="info-bloco">
                            <h4>Recorde do Circuito</h4>
                            ${recordeHtml}
                        </div>
                    </div>
                    <div class="historico-corrida">
                        ${tabelaHistoricoHtml}
                    </div>
                </div>
            `;
        }).join('');
    }



    function renderAbaGaleria() {
        const nomeEscuderiaEl = document.getElementById('escuderia-nome-galeria');
        const trofeusContainer = document.getElementById('gabinete-trofeus');
        const hallDaFamaContainer = document.getElementById('hall-da-fama');
        const estatisticasTabelaBody = document.querySelector('#tabela-estatisticas-pilotos tbody');

        if (!nomeEscuderiaEl || !trofeusContainer || !hallDaFamaContainer || !estatisticasTabelaBody) return;

        // Renderiza o emblema principal da galeria
        const emblemaGaleriaContainer = document.getElementById('emblema-display-galeria');
        if (emblemaGaleriaContainer) {
            renderizarEmblema(emblemaGaleriaContainer, gameState.escuderia.emblema);
        }

        // --- LÓGICA DO HALL DA FAMA ATUALIZADA ---
        if (!gameState.galeria.hallDaFama || gameState.galeria.hallDaFama.length === 0) {
            hallDaFamaContainer.innerHTML = '<h3>Hall da Fama</h3><p>Nenhum piloto foi adicionado ao Hall da Fama ainda.</p>';
        } else {
            // 1. Cria o HTML com os placeholders para os emblemas
            hallDaFamaContainer.innerHTML = `
                <h3>Hall da Fama</h3>
                ${gameState.galeria.hallDaFama.map((p, index) => `
                    <div class="piloto-fama">
                        <div id="emblema-hof-${index}" class="emblema-hof"></div>
                        <div class="piloto-fama-info">
                            <h4>${p.piloto.nome}</h4> <p>Aposentou-se em ${p.anoAposentadoria}</p>
                        </div>
                    </div>
                `).join('')}
            `;

            // 2. Percorre novamente e "desenha" cada emblema histórico no seu placeholder
            gameState.galeria.hallDaFama.forEach((p, index) => {
                if (p.emblemaNaEpoca) {
                    const container = document.getElementById(`emblema-hof-${index}`);
                    if (container) {
                        renderizarEmblema(container, p.emblemaNaEpoca);
                    }
                }
            });
        }

        // --- Renderiza os troféus e estatísticas ---
        nomeEscuderiaEl.textContent = gameState.escuderia.nome;
        trofeusContainer.innerHTML = `
            <h3>Gabinete de Troféus</h3>
            <div class="trofeu-container">
                <div>
                    <div class="trofeu">🏆</div>
                    <div>Construtores</div>
                    <div class="trofeu-contador">${gameState.galeria.titulosConstrutores || 0}</div>
                </div>
                <div>
                    <div class="trofeu">🏆</div>
                    <div>Pilotos</div>
                    <div class="trofeu-contador">${gameState.galeria.titulosPilotos || 0}</div>
                </div>
            </div>
        `;

        const estatisticas = gameState.galeria.estatisticasPilotos || {};
        estatisticasTabelaBody.innerHTML = Object.entries(estatisticas).map(([nome, stats]) => `
            <tr>
                <td>${nome}</td>
                <td>${stats.corridas}</td>
                <td>${stats.vitorias}</td>
                <td>${stats.podios}</td>
                <td>${stats.pontos}</td>
            </tr>
        `).join('');
    }



    /* 5.0 eventos listener */


    document.body.addEventListener('click', (e) => {
        const target = e.target;
        const action = target.dataset.action;

        // --- AÇÕES GLOBAIS E DE NAVEGAÇÃO ---
        if (target.matches('.tab-btn')) {
            document.querySelectorAll('.tab-btn, .tab-pane').forEach(el => el.classList.remove('active'));
            target.classList.add('active');
            const abaAtiva = document.getElementById(target.dataset.tab);
            if (abaAtiva) abaAtiva.classList.add('active');
            updateUI();
            return; // Ação de navegação, encerra aqui.
        }
        if (target.matches('.modal-close-btn') || target.id === 'part-selector-modal' || target.id === 'project-modal') {
            closePartSelectorModal();
            document.getElementById('project-modal').classList.add('hidden');
            return;
        }

        // --- AÇÕES DE PILOTOS (Padronizadas com data-action) ---
        if (action === 'contratar-piloto') {
            contratarPiloto(parseInt(target.dataset.pilotoId));
        } else if (action === 'dispensar-piloto') {
            dispensarPiloto(parseInt(target.dataset.pilotoId));
        } else if (action === 'promover-piloto') {
            promoverPilotoReserva(parseInt(target.dataset.pilotoId));
        }

        // --- AÇÕES DA ABA ESCUDERIA / INSTALAÇÕES ---
        else if (target.matches('#btn-salvar-nome')) {
            const novoNome = document.getElementById('input-nome-escuderia').value.trim();
            if (novoNome) {
                gameState.escuderia.nome = novoNome;
                renderEscuderia();
                saveGame();
            }
        } else if (target.matches('#btn-falencia')) {
            declararFalencia();
        } else if (target.matches('.btn-contratar')) { // Contratar Especialista
            const esp = especialistasDisponiveis.find(e => e.id === parseInt(target.dataset.id));
            if (gameState.escuderia.dinheiro >= esp.salario) {
                gameState.escuderia.dinheiro -= esp.salario;
                gameState.escuderia.especialistas.push(esp);
                updateUI();
                saveGame();
            } else { alert("Dinheiro insuficiente."); }
        } else if (target.matches('.btn-demitir')) {
            gameState.escuderia.especialistas = gameState.escuderia.especialistas.filter(esp => esp.id !== parseInt(target.dataset.id));
            updateUI();
            saveGame();
        } else if (action === 'melhorar-instalacao') {
            melhorarInstalacao(target.dataset.instalacaoId);
        }

        // --- AÇÕES DA ABA IDENTIDADE DA EQUIPE ---
        else if (target.closest('.seletor-item')) {
            const seletor = target.closest('.seletor-item');
            gameState.escuderia.emblema[seletor.dataset.tipo] = seletor.dataset.valor;
            atualizarPreviewEmblema();
        } else if (target.id === 'btn-trocar-camada') {
            gameState.escuderia.emblema.iconeNaFrente = !gameState.escuderia.emblema.iconeNaFrente;
            atualizarPreviewEmblema();
        } else if (target.id === 'btn-fundo-transparente') {
            gameState.escuderia.emblema.corFundo = 'transparent';
            atualizarPreviewEmblema();
            saveGame();
        } else if (target.id === 'btn-salvar-identidade') {
            saveGame();
            alert('Identidade da equipe salva com sucesso!');
        }

        // --- AÇÕES DAS ABAS CARRO E PEÇAS ---
        else if (target.matches('#btn-auto-equip')) {
            autoEquiparMelhoresPecas();
        } else if (target.matches('.car-selector-btn')) {
            garagemState.carroSelecionadoIndex = parseInt(target.dataset.carIndex);
            renderGaragem();
        } else if (target.matches('.btn-trocar-peca')) {
            openPartSelectorModal(target.dataset.slotKey);
        } else if (target.closest('#modal-parts-list .peca-card')) {
            const card = target.closest('.peca-card');
            equiparPeca(parseInt(card.dataset.instanceId), card.dataset.slotKey);
        } else if (target.matches('.btn-vender-peca[data-instance-id]')) {
            venderPecaInventario(parseInt(target.dataset.instanceId));
        } else if (target.matches('.btn-comprar')) {
            comprarPeca(parseInt(target.dataset.instanceId));
        } else if (target.matches('#btn-atualizar-mercado')) {
            if (gameState.escuderia.dinheiro >= 30000) {
                gameState.escuderia.dinheiro -= 30000;
                const olheiroContratado = gameState.escuderia.especialistas.find(e => e.tipo === "Olheiro");
                const fatorFinal = (gameState.campeonato.ano - 2025) + (olheiroContratado ? olheiroContratado.nivel * 2 : 0);
                gerarMercado(fatorFinal);
                renderAbaNegociacoes();
                renderEscuderia();
                saveGame();
            } else { alert("Dinheiro insuficiente para atualizar o mercado!"); }
        } else if (target.matches('.sortable-header')) {
            const newColumn = target.dataset.sort;
            if (sortState.column === newColumn) {
                // Se está clicando na mesma coluna, apenas inverte a direção
                sortState.direction = sortState.direction === 'asc' ? 'desc' : 'asc';
            } else {
                // Se está clicando em uma nova coluna, define a nova coluna e reseta a direção para 'asc'
                sortState.column = newColumn;
                sortState.direction = 'asc';
            }
            renderAbaNegociacoes();
        }

        // --- AÇÕES DE PROJETOS DE PEÇAS ---
        else if (target.matches('.btn-projeto')) {
            const especialistaId = parseInt(target.dataset.especialistaId);
            const especialista = especialistasDisponiveis.find(e => e.id === especialistaId);
            projetoAtual = { especialistaId };
            document.getElementById('project-modal-title').textContent = `Novo Projeto com ${especialista.nome}`;
            const partSelect = document.getElementById('project-part-type');
            const tiposPossiveis = especialistaHabilidades[especialista.tipo] || [];
            partSelect.innerHTML = tiposPossiveis.map(tipo => `<option value="${tipo}">${tipo}</option>`).join('');
            document.getElementById('btn-confirmar-projeto').disabled = tiposPossiveis.length === 0;
            if (tiposPossiveis.length === 0) partSelect.innerHTML = `<option>Este especialista não desenvolve peças.</option>`;
            atualizarSumarioProjeto();
            document.getElementById('project-modal').classList.remove('hidden');
        } else if (target.matches('#btn-confirmar-projeto')) {
            iniciarNovoProjeto(projetoAtual.especialistaId, document.getElementById('project-part-type').value, parseInt(document.getElementById('project-duration').value));
            document.getElementById('project-modal').classList.add('hidden');
        } else if (target.matches('.btn-ficar-com-peca')) {
            const projetoId = parseInt(target.dataset.projectId);
            const projeto = gameState.projetosEmAndamento.find(p => p.id === projetoId);
            if (!projeto) return;
            const pecaFinal = projeto.pecaConcluida;
            if (!pecaFinal) { alert("Erro ao obter a peça final."); return; }
            const custoProducao = Math.floor(calcularPrecoPeca(pecaFinal) * 0.15);
            if (confirm(`A produção final desta peça custará R$ ${custoProducao.toLocaleString('pt-BR')}. Deseja continuar?`)) {
                if (gameState.escuderia.dinheiro >= custoProducao) {
                    gameState.escuderia.dinheiro -= custoProducao;
                    gameState.todasAsPecas.push(pecaFinal);
                    gameState.projetosEmAndamento = gameState.projetosEmAndamento.filter(p => p.id !== projetoId);
                    alert("Peça produzida e adicionada ao inventário!");
                    updateUI();
                    saveGame();
                } else { alert("Dinheiro insuficiente para a produção!"); }
            }
        } else if (target.matches('.btn-vender-peca[data-project-id]')) {
            const projetoId = parseInt(target.dataset.projectId);
            const projeto = gameState.projetosEmAndamento.find(p => p.id === projetoId);
            if (projeto) {
                projeto.status = 'a_venda';
                alert("A peça foi colocada no mercado. Você será notificado quando for vendida.");
                renderProjetos();
                saveGame();
            }
        }

        // --- AÇÕES DA ABA MARKETING ---
        else if (action === 'desbloquear-marketing') {
            desbloquearItemMarketing(target.dataset.itemNome);
        } else if (action === 'produzir-marketing') {
            const nomeItem = target.dataset.itemNome;
            const inputQtd = document.getElementById(`qtd-${nomeItem}`);
            if (inputQtd && inputQtd.value > 0) {
                produzirItemMarketing(nomeItem, inputQtd.value);
                inputQtd.value = '';
            } else {
                alert("Por favor, insira uma quantidade válida.");
            }
        } else if (action === 'aumentar-icone' || action === 'diminuir-icone') {
            const nomeItem = target.dataset.itemNome;
            const itemJogo = gameState.marketing[nomeItem];
            const emblemaContainer = document.getElementById(`emblema-container-${nomeItem}`);
            if (!emblemaContainer || !itemJogo) return;
            let currentWidth = itemJogo.tamanhoIcone.width;
            let currentHeight = itemJogo.tamanhoIcone.height;
            const scaleFactor = 5;
            if (action === 'aumentar-icone') {
                currentWidth = Math.min(100, currentWidth + scaleFactor);
                currentHeight = Math.min(100, currentHeight + scaleFactor);
            } else {
                currentWidth = Math.max(10, currentWidth - scaleFactor);
                currentHeight = Math.max(10, currentHeight - scaleFactor);
            }
            itemJogo.tamanhoIcone = { width: currentWidth, height: currentHeight };
            emblemaContainer.style.width = `${currentWidth}%`;
            emblemaContainer.style.height = `${currentHeight}%`;
            saveGame();
        }

        // --- AÇÕES DE PATROCÍNIO ---
        else if (target.matches('.btn-aceitar-patrocinio')) {
            aceitarOfertaPatrocinio(parseInt(target.dataset.ofertaId));
        }

        // --- AÇÕES DA ABA CORRIDA ---
        else if (target.matches('.btn-mode')) {
            if (!animacaoAtiva) return;
            const carIndex = parseInt(target.dataset.carIndex);
            const mode = target.dataset.mode;
            const pilotoId = gameState.carros[carIndex].pilotoId;
            const participante = raceData.participantes.find(p => p.piloto.id === pilotoId);
            if (participante) {
                participante.modoAgressividade = mode;
                renderEstrategiaUI();
            }
        } else if (target.matches('#btn-corrida-real') || target.matches('#btn-corrida-rapida')) {
            const carrosDoJogador = gameState.carros.filter(c => c.pilotoId !== null);
            if (carrosDoJogador.length < 2) { alert("Você precisa ter 2 pilotos contratados para iniciar uma corrida!"); return; }
            if (!isEstrategiaValida(carrosDoJogador[0].estrategia) || !isEstrategiaValida(carrosDoJogador[1].estrategia)) { alert("Estratégia Inválida! Verifique as regras de pneus."); return; }
            if (!carrosDoJogador.every(carro => Object.values(carro.pecas).every(peca => peca !== null))) { alert("Ambos os carros precisam ter todas as peças equipadas!"); return; }
            target.disabled = true;
            document.getElementById(target.id === 'btn-corrida-real' ? 'btn-corrida-rapida' : 'btn-corrida-real').disabled = true;
            iniciarSequenciaDeLargada(target.id === 'btn-corrida-real' ? 'real' : 'rapido');
        } else if (target.matches('#btn-fechar-resultados')) {
            const isSeasonOver = gameState.campeonato.corridaAtualIndex >= calendarioCorridas.length;
            if (isSeasonOver) {
                document.querySelectorAll('.tab-btn, .tab-pane').forEach(el => el.classList.remove('active'));
                const campTabBtn = document.querySelector('.tab-btn[data-tab="campeonato"]');
                const campTabPane = document.getElementById('campeonato');
                if (campTabBtn) campTabBtn.classList.add('active');
                if (campTabPane) campTabPane.classList.add('active');
                updateUI();
            } else {
                updateUI();
            }
        } else if (target.matches('#btn-iniciar-nova-temporada')) {
            processarFimDeTemporada();
            saveGame();
            updateUI();
        } else if (target.matches('.btn-add-stint')) {
            const carroIndex = parseInt(target.dataset.carIndex);
            const carro = gameState.carros[carroIndex];
            const ultimaParada = carro.estrategia.paradas.length > 0 ? carro.estrategia.paradas.at(-1).pararNaVolta : 0;
            carro.estrategia.paradas.push({ pararNaVolta: ultimaParada + 15, colocarPneu: 'duro' });
            renderEstrategiaUI();
            saveGame();
        } else if (target.matches('.btn-remover-stint')) {
            const carroIndex = parseInt(target.dataset.carIndex);
            const paradaIndex = parseInt(target.dataset.paradaIndex);
            gameState.carros[carroIndex].estrategia.paradas.splice(paradaIndex, 1);
            renderEstrategiaUI();
            saveGame();
        }
    });










    document.body.addEventListener('change', (e) => {
        const target = e.target;
        if (target.matches('.pneu-select-inicial, .pneu-select-parada')) {
            const carroIndex = parseInt(target.dataset.carIndex);
            if (isNaN(carroIndex)) return;
            const paradaIndex = target.dataset.paradaIndex;
            if (paradaIndex) {
                gameState.carros[carroIndex].estrategia.paradas[paradaIndex].colocarPneu = target.value;
            } else {
                gameState.carros[carroIndex].estrategia.pneuInicial = target.value;
            }
            renderEstrategiaUI();
            saveGame();
        } else if (target.matches('#filtro-tipo-peca')) {
            renderAbaNegociacoes();
        } else if (target.matches('#project-part-type, #project-duration')) {
            atualizarSumarioProjeto();
        }
    });







    document.body.addEventListener('input', (e) => {
    const target = e.target;

    if (target.matches('.volta-input')) {
        const carroIndex = parseInt(target.dataset.carIndex);
        const paradaIndex = parseInt(target.dataset.paradaIndex);
        if (isNaN(carroIndex) || isNaN(paradaIndex)) return;
        gameState.carros[carroIndex].estrategia.paradas[paradaIndex].pararNaVolta = parseInt(target.value) || 0;
        saveGame();
    } else if (target.matches('#filtro-nivel-min')) {
        renderAbaNegociacoes();
    } else if (target.id === 'cor-fundo') {
        gameState.escuderia.emblema.corFundo = target.value;
        atualizarPreviewEmblema();
    } else if (target.id === 'cor-forma') {
        gameState.escuderia.emblema.corForma = target.value;
        atualizarPreviewEmblema();
    } else if (target.id === 'cor-icone') {
        gameState.escuderia.emblema.corIcone = target.value;
        atualizarPreviewEmblema();
    } else if (target.id === 'escala-icone') {
        const novoValor = e.target.value; // Valor de 20 a 120
        const novaEscala = novoValor / 100; // Converte para 0.2 a 1.2
        gameState.escuderia.emblema.escalaIcone = novaEscala;
        atualizarPreviewEmblema(); // Re-renderiza o preview com o novo tamanho
    }

    // A lógica de marketing foi separada em blocos 'else if' independentes e corretos.
    else if (target.matches('[data-action="definir-preco"]')) {
        definirPrecoVendaMarketing(target.dataset.itemNome, target.value);
    }
    else if (target.matches('[data-action="calcular-custo"]')) {
        const nomeItem = target.dataset.itemNome;
        const displayCusto = document.getElementById(`custo-total-${nomeItem}`);
        if (!displayCusto) return;

        const quantidade = parseInt(target.value) || 0;
        const itemCatalogo = catalogoMarketing[nomeItem];

        if (quantidade > 0) {
            const custoTotal = quantidade * itemCatalogo.custo_producao;
            displayCusto.textContent = `Custo Total: R$ ${custoTotal.toLocaleString('pt-BR')}`;
        } else {
            displayCusto.textContent = 'Custo Total: R$ 0';
        }
    }
    });







    let currentDraggable = null;
    let offsetX, offsetY;

    // 1. Inicia o arrasto quando o mouse é pressionado sobre um elemento 'draggable'
    document.body.addEventListener('mousedown', (e) => {
        const draggableTarget = e.target.closest('.draggable');
        if (draggableTarget) {
            e.preventDefault(); // Impede que o navegador selecione texto durante o arrasto
            currentDraggable = draggableTarget;

            // Calcula a posição do clique do mouse dentro do elemento arrastável
            const rect = currentDraggable.getBoundingClientRect();
            offsetX = e.clientX - rect.left;
            offsetY = e.clientY - rect.top;

            currentDraggable.style.cursor = 'grabbing'; // Muda o cursor para indicar que está arrastando
        }
    });




    // 2. Move o elemento enquanto o mouse se move pela tela
    document.body.addEventListener('mousemove', (e) => {
        if (!currentDraggable) return; // Só executa se um arrasto foi iniciado

        e.preventDefault();

        // Pega as dimensões do container "pai" (a imagem do produto)
        const containerRect = currentDraggable.parentElement.getBoundingClientRect();

        // Calcula a nova posição do canto superior esquerdo do emblema
        let newX = e.clientX - offsetX - containerRect.left;
        let newY = e.clientY - offsetY - containerRect.top;

        // Garante que o emblema não saia para fora dos limites da imagem do produto
        newX = Math.max(0, Math.min(newX, containerRect.width - currentDraggable.offsetWidth));
        newY = Math.max(0, Math.min(newY, containerRect.height - currentDraggable.offsetHeight));

        // Aplica a nova posição em porcentagem, para que seja responsivo
        currentDraggable.style.left = `${(newX / containerRect.width) * 100}%`;
        currentDraggable.style.top = `${(newY / containerRect.height) * 100}%`;
    });




    // 3. Finaliza o arrasto quando o botão do mouse é solto
    document.body.addEventListener('mouseup', (e) => {
        if (currentDraggable) {
            currentDraggable.style.cursor = 'grab'; // Restaura o cursor do mouse

            // Pega o nome do item a partir do ID do elemento
            const nomeItem = currentDraggable.id.replace('emblema-container-', '');
            const itemJogo = gameState.marketing[nomeItem];

            // Salva a posição final no gameState para persistir a alteração
            if (itemJogo) {
                itemJogo.posicaoIcone = {
                    top: parseFloat(currentDraggable.style.top),
                    left: parseFloat(currentDraggable.style.left)
                };
                saveGame();
            }

            // Limpa a variável para indicar que o arrasto terminou
            currentDraggable = null;
        }
    });

    // --- 6. INICIALIZAÇÃO ---
    loadGame();
    updateUI();
});