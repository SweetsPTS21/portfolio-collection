import React from "react";
import { useEffect } from "react";
import Lenis from "lenis";
import { Link, NavLink } from "react-router-dom";
import { Mail, MapPinned, Palmtree, Sparkles } from "lucide-react";
import { routes } from "../../app/routes.jsx";
import { cssVars } from "../../app/theme.js";
import TropicalBackground from "../../features/tropical-scene/TropicalBackground.jsx";

export default function TropicalPostcardShell({ children }) {
    useEffect(() => {
        const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
        let rafId = 0;
        const raf = (time) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        };

        rafId = requestAnimationFrame(raf);
        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
        };
    }, []);

    return (
        <div className="app-shell" style={cssVars}>
            <TropicalBackground />
            <header className="site-header" aria-label="Primary navigation">
                <Link className="brand-mark" to="/" aria-label="Đỗ Huyền Trang home">
                    <span className="brand-stamp"><Palmtree size={18} /></span>
                    <span>
                        <strong>Huyen Trang</strong>
                        <small>Tropical postcard</small>
                    </span>
                </Link>

                <nav className="route-tabs">
                    {routes.map((route) => (
                        <NavLink key={route.path} to={route.path} className="route-tab">
                            <span>{route.shortLabel}</span>
                            <strong>{route.label}</strong>
                        </NavLink>
                    ))}
                </nav>

                <a className="header-action" href="mailto:htrang@example.com" aria-label="Send postcard">
                    <Mail size={18} />
                    <span>Send</span>
                </a>
            </header>

            <div className="floating-route-label" aria-hidden="true">
                <MapPinned size={16} />
                <span>Blue tropical route</span>
                <Sparkles size={15} />
            </div>

            {children}
        </div>
    );
}
