"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();

    const handleToggle = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div className="flex items-center space-x-2">
            <Switch id="theme-toggle" checked={theme === "dark"} onCheckedChange={handleToggle} />
            <Label htmlFor="theme-toggle">Toggle Theme</Label>
        </div>
    );
}
