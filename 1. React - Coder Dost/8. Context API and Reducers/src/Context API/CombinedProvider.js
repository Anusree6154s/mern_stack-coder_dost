// just used for combining all providers (aka global value logics)

import ThemeProvider from "./Providers/ThemeProvider"
import DispatchProvider from "./Providers/DispatchProvider"
import FindVideoProvider from "./Providers/FindVideoProvider"

function CombinedProvider({ children }) {

    return (
        <ThemeProvider>
            <DispatchProvider>
                <FindVideoProvider>
                    {children}
                </FindVideoProvider>
            </DispatchProvider>
        </ThemeProvider>
    )
}

export default CombinedProvider