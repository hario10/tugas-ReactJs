import { useState } from "react"

export const useExpression = () => {
    const [nilai, setNilai] = useState(false);
    return [nilai, setNilai];
}