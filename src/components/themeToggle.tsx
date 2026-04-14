'use client'

import { MoonStar, SunDim } from "lucide-react";
import { Switch, SwitchThumb } from "@/controls/switch";
import { useTheme } from 'next-themes';
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <Switch className="data-[state=checked]:bg-gray-700" defaultValue={true}>
                <SwitchThumb className="shadow-sm data-[state=checked]:shadow-white-sm">
                    <SunDim />
                    <MoonStar color="white" />
                </SwitchThumb>
            </Switch>
        )
    }
    return (
        <Switch className="data-[state=checked]:bg-gray-700" value={theme === "dark"} onValueChange={(checked) => setTheme(checked ? 'dark' : 'light')}>
            <SwitchThumb className="shadow-sm data-[state=checked]:shadow-white-sm">
                <SunDim />
                <MoonStar color="white" />
            </SwitchThumb>
        </Switch>
    )
}
