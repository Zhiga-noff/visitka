
import RootLayout from "app/layout";
import {Ticker} from "../../components/ticker/Ticker";

interface IProps {
    children: React.ReactNode;
}


// Главная надстройка над всеми страницами
export default function WhithTickerLayout({children}: IProps) {
    return (
        <>
            {children}
            <Ticker/>
        </>
    );
}
