import { useState } from "react";

function PhoneInput() {
    const [tel, setTel] = useState("");

    const handleTelChange = (e) => {
        // Remove caracteres indesejados usando regex
        e = e.replace(/[^\d]/g, "");

        const filteredDigits = e.split("").filter((digit) => digit !== ".");

        const finalDigits = filteredDigits.length > 0 ? filteredDigits : ["."];

        // Converte de volta para string e preenche com pontos à esquerda
        const numberString = finalDigits.join("").padStart(11, ".");

        // Formata o número
        const number = `(${numberString.slice(0, 2)}) ${numberString.slice(2, 7)}-${numberString.slice(7, 11)}`;
        /[\d]/.test(number)?setTel(number):setTel("");
    };

    return (
        <input
            type="tel"
            name="telefone"
            placeholder=""
            value={tel}
            onChange={(e) => handleTelChange(e.target.value)}
        />
    );
}

export default PhoneInput;
