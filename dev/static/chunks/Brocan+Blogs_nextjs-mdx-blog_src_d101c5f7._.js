(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Brocan+Blogs/nextjs-mdx-blog/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Brocan+Blogs/nextjs-mdx-blog/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Brocan+Blogs/nextjs-mdx-blog/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Brocan+Blogs/nextjs-mdx-blog/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Brocan+Blogs/nextjs-mdx-blog/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Brocan+Blogs/nextjs-mdx-blog/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/ui/button.tsx [app-client] (ecmascript)");
"use client";
;
;
const Header = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "w-full bg-white border-b border-gray-200",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center h-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xl font-semibold text-gray-900",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/",
                                    className: "transition-colors",
                                    children: "Brocan"
                                }, void 0, false, {
                                    fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/Header.tsx",
                                    lineNumber: 13,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/Header.tsx",
                                lineNumber: 12,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "hidden md:flex space-x-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/pocketretail",
                                        className: "text-gray-700 hover:text-gray-900 transition-colors",
                                        children: "Pocket Retail"
                                    }, void 0, false, {
                                        fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/Header.tsx",
                                        lineNumber: 16,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/pulsegym-pro",
                                        className: "text-gray-700 hover:text-gray-900 transition-colors",
                                        children: "PulseGym Pro"
                                    }, void 0, false, {
                                        fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/Header.tsx",
                                        lineNumber: 17,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/blog",
                                        className: "text-gray-700 hover:text-gray-900 transition-colors",
                                        children: "Blog"
                                    }, void 0, false, {
                                        fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/Header.tsx",
                                        lineNumber: 18,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/Header.tsx",
                                lineNumber: 15,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/Header.tsx",
                        lineNumber: 11,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: ()=>{
                                const el = document.getElementById("contact-form");
                                if (el) el.scrollIntoView({
                                    behavior: "smooth"
                                });
                            },
                            className: "bg-black text-white hover:bg-gray-800",
                            children: "Contact sales"
                        }, void 0, false, {
                            fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/Header.tsx",
                            lineNumber: 27,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/Header.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/Header.tsx",
                lineNumber: 10,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/Header.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/Header.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Brocan+Blogs/nextjs-mdx-blog/src/hooks/useScrollAnimation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScrollAnimation",
    ()=>useScrollAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Brocan+Blogs/nextjs-mdx-blog/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const useScrollAnimation = (options = {})=>{
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const elementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useScrollAnimation.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "useScrollAnimation.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                }
            }["useScrollAnimation.useEffect"], {
                threshold: options.threshold || 0.1,
                rootMargin: options.rootMargin || '0px 0px -100px 0px'
            });
            const currentElement = elementRef.current;
            if (currentElement) {
                observer.observe(currentElement);
            }
            return ({
                "useScrollAnimation.useEffect": ()=>{
                    if (currentElement) {
                        observer.unobserve(currentElement);
                    }
                }
            })["useScrollAnimation.useEffect"];
        }
    }["useScrollAnimation.useEffect"], [
        options.threshold,
        options.rootMargin
    ]);
    return {
        elementRef,
        isVisible
    };
};
_s(useScrollAnimation, "ars/gJ7qRrRI4qdM8DRo1FWAkKE=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/SafeImage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SafeImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Brocan+Blogs/nextjs-mdx-blog/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Brocan+Blogs/nextjs-mdx-blog/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Brocan+Blogs/nextjs-mdx-blog/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
'use client';
;
;
function SafeImage({ src, alt, fill, className, sizes, priority, fallback }) {
    _s();
    const [hasError, setHasError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (hasError) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center ${className}`,
            children: fallback || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-gray-400 text-4xl font-bold",
                children: alt.charAt(0).toUpperCase()
            }, void 0, false, {
                fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/SafeImage.tsx",
                lineNumber: 33,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/SafeImage.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        src: src,
        alt: alt,
        fill: fill,
        className: className,
        sizes: sizes,
        priority: priority,
        onError: ()=>setHasError(true)
    }, void 0, false, {
        fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/SafeImage.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(SafeImage, "0lWSx5YqYPOl7PiOJe/TIAtHv6A=");
_c = SafeImage;
var _c;
__turbopack_context__.k.register(_c, "SafeImage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/BlogCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Brocan+Blogs/nextjs-mdx-blog/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Brocan+Blogs/nextjs-mdx-blog/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$src$2f$components$2f$SafeImage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/SafeImage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Brocan+Blogs/nextjs-mdx-blog/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Brocan+Blogs/nextjs-mdx-blog/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Brocan+Blogs/nextjs-mdx-blog/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Brocan+Blogs/nextjs-mdx-blog/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
;
;
;
;
function BlogCard({ post }) {
    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-48 w-full overflow-hidden",
                children: post.coverImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$src$2f$components$2f$SafeImage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: post.coverImage,
                            alt: post.title,
                            fill: true,
                            className: "object-cover transition-transform duration-700 group-hover:scale-110",
                            sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
                            fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-gray-400 text-4xl font-bold",
                                children: post.title.charAt(0).toUpperCase()
                            }, void 0, false, {
                                fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/BlogCard.tsx",
                                lineNumber: 30,
                                columnNumber: 17
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/BlogCard.tsx",
                            lineNumber: 23,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        }, void 0, false, {
                            fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/BlogCard.tsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-48 w-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-gray-400 text-4xl font-bold",
                        children: post.title.charAt(0).toUpperCase()
                    }, void 0, false, {
                        fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/BlogCard.tsx",
                        lineNumber: 39,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/BlogCard.tsx",
                    lineNumber: 38,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/BlogCard.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4 text-sm text-gray-500 mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                        className: "h-3 w-3"
                                    }, void 0, false, {
                                        fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/BlogCard.tsx",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                                        dateTime: post.date,
                                        children: formattedDate
                                    }, void 0, false, {
                                        fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/BlogCard.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/BlogCard.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            post.author && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                        className: "h-3 w-3"
                                    }, void 0, false, {
                                        fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/BlogCard.tsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: post.author
                                    }, void 0, false, {
                                        fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/BlogCard.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/BlogCard.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this),
                            post.readingTime && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                        className: "h-3 w-3"
                                    }, void 0, false, {
                                        fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/BlogCard.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            post.readingTime,
                                            " min"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/BlogCard.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/BlogCard.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/BlogCard.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    post.category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full",
                            children: post.category
                        }, void 0, false, {
                            fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/BlogCard.tsx",
                            lineNumber: 71,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/BlogCard.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors line-clamp-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: `/blog/${post.slug}`,
                            children: post.title
                        }, void 0, false, {
                            fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/BlogCard.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/BlogCard.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 mb-4 line-clamp-3 leading-relaxed",
                        children: post.description
                    }, void 0, false, {
                        fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/BlogCard.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    post.tags && post.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2 mb-4",
                        children: post.tags.slice(0, 3).map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs px-2 py-1 bg-gray-50 text-gray-600 rounded-md border",
                                children: [
                                    "#",
                                    tag
                                ]
                            }, tag, true, {
                                fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/BlogCard.tsx",
                                lineNumber: 93,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/BlogCard.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/blog/${post.slug}`,
                        className: "inline-flex items-center gap-2 text-black font-medium hover:gap-3 transition-all duration-300 group/link",
                        children: [
                            "Read Article",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                className: "h-4 w-4 transition-transform group-hover/link:translate-x-1"
                            }, void 0, false, {
                                fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/BlogCard.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/BlogCard.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/BlogCard.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/BlogCard.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = BlogCard;
var _c;
__turbopack_context__.k.register(_c, "BlogCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/FinalCTA.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Brocan+Blogs/nextjs-mdx-blog/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/ui/button.tsx [app-client] (ecmascript)");
;
;
const FinalCTA = ()=>{
    const socailMediaLink = [
        // {
        //   label: "Facebook",
        //   link: "https://www.facebook.com/"
        // },
        {
            label: "Instagram",
            link: "https://www.instagram.com/we.brocan/"
        },
        {
            label: "Youtube",
            link: "https://www.youtube.com/@brocan_tech"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-gray-900 pt-20 pb-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center flex-wrap",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-4xl md:text-5xl font-bold text-white",
                                    children: "Brocan"
                                }, void 0, false, {
                                    fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/FinalCTA.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-400 mt-2 mb-4",
                                    children: "Stop Just Billing, Start Smart Selling"
                                }, void 0, false, {
                                    fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/FinalCTA.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: socailMediaLink.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: item.link,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-gray-400 hover:text-white mr-4",
                                            children: item.label
                                        }, index, false, {
                                            fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/FinalCTA.tsx",
                                            lineNumber: 33,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/FinalCTA.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/FinalCTA.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex space-x-4 py-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: ()=>{
                                    const el = document.getElementById("contact-form");
                                    if (el) el.scrollIntoView({
                                        behavior: "smooth"
                                    });
                                },
                                className: "bg-white text-gray-900 hover:bg-gray-100",
                                children: "Contact sales"
                            }, void 0, false, {
                                fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/FinalCTA.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/FinalCTA.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/FinalCTA.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 mt-10 text-center text-[14px]",
                        children: "© 2025 Brocan Solutions, Inc. All rights reserved."
                    }, void 0, false, {
                        fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/FinalCTA.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/FinalCTA.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/FinalCTA.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/FinalCTA.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = FinalCTA;
const __TURBOPACK__default__export__ = FinalCTA;
var _c;
__turbopack_context__.k.register(_c, "FinalCTA");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/ClientBlogContent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientBlogContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Brocan+Blogs/nextjs-mdx-blog/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$src$2f$hooks$2f$useScrollAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Brocan+Blogs/nextjs-mdx-blog/src/hooks/useScrollAnimation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$src$2f$components$2f$BlogCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/BlogCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/Brocan+Blogs/nextjs-mdx-blog/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Brocan+Blogs/nextjs-mdx-blog/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$src$2f$components$2f$FinalCTA$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/FinalCTA.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ClientBlogContent({ posts }) {
    _s();
    const { elementRef: heroRef, isVisible: heroVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$src$2f$hooks$2f$useScrollAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnimation"])();
    const { elementRef: postsRef, isVisible: postsVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$src$2f$hooks$2f$useScrollAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnimation"])({
        threshold: 0.1
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-white py-20 lg:py-32",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: heroRef,
                        className: `text-center transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-medium text-gray-600 mb-4 block",
                                    children: "Brocan Blog"
                                }, void 0, false, {
                                    fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/ClientBlogContent.tsx",
                                    lineNumber: 30,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/ClientBlogContent.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight",
                                children: "Insights & Stories"
                            }, void 0, false, {
                                fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/ClientBlogContent.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed",
                                children: "Discover the latest insights, tutorials, and stories about modern web development, business growth, and technology trends that matter to your success."
                            }, void 0, false, {
                                fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/ClientBlogContent.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this),
                            posts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-md mx-auto bg-gray-50 rounded-2xl p-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                        className: "h-16 w-16 mx-auto text-gray-400 mb-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/ClientBlogContent.tsx",
                                        lineNumber: 42,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-semibold text-gray-900 mb-2",
                                        children: "No posts yet"
                                    }, void 0, false, {
                                        fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/ClientBlogContent.tsx",
                                        lineNumber: 43,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 mb-6",
                                        children: "Be the first to share your insights with the world."
                                    }, void 0, false, {
                                        fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/ClientBlogContent.tsx",
                                        lineNumber: 44,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/ClientBlogContent.tsx",
                                lineNumber: 41,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    className: "px-8 py-3 text-lg border-gray-300 text-gray-900 hover:bg-gray-100",
                                    onClick: ()=>{
                                        const el = document.getElementById("latest-posts");
                                        if (el) el.scrollIntoView({
                                            behavior: "smooth"
                                        });
                                    },
                                    children: "Explore Articles"
                                }, void 0, false, {
                                    fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/ClientBlogContent.tsx",
                                    lineNumber: 57,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/ClientBlogContent.tsx",
                                lineNumber: 56,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/ClientBlogContent.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/ClientBlogContent.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/ClientBlogContent.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            posts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "latest-posts",
                className: "bg-gray-50 py-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: postsRef,
                        className: `transition-all duration-1000 ${postsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mb-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl md:text-4xl font-bold text-gray-900 mb-4",
                                        children: "Latest Articles"
                                    }, void 0, false, {
                                        fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/ClientBlogContent.tsx",
                                        lineNumber: 90,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 max-w-2xl mx-auto",
                                        children: "Stay updated with our latest thoughts, tutorials, and insights on technology and business."
                                    }, void 0, false, {
                                        fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/ClientBlogContent.tsx",
                                        lineNumber: 93,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/ClientBlogContent.tsx",
                                lineNumber: 89,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3",
                                children: posts.map((post, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `transition-all duration-1000 ${postsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`,
                                        style: {
                                            transitionDelay: `${index * 100}ms`
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$src$2f$components$2f$BlogCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            post: post
                                        }, void 0, false, {
                                            fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/ClientBlogContent.tsx",
                                            lineNumber: 109,
                                            columnNumber: 21
                                        }, this)
                                    }, post.slug, false, {
                                        fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/ClientBlogContent.tsx",
                                        lineNumber: 100,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/ClientBlogContent.tsx",
                                lineNumber: 98,
                                columnNumber: 15
                            }, this),
                            posts.length > 6 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mt-12",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    className: "px-8 py-3 text-lg border-gray-300 text-gray-900 hover:bg-gray-100",
                                    children: [
                                        "Load More Articles",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "h-4 w-4 ml-2"
                                        }, void 0, false, {
                                            fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/ClientBlogContent.tsx",
                                            lineNumber: 121,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/ClientBlogContent.tsx",
                                    lineNumber: 116,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/ClientBlogContent.tsx",
                                lineNumber: 115,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/ClientBlogContent.tsx",
                        lineNumber: 83,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/ClientBlogContent.tsx",
                    lineNumber: 82,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/ClientBlogContent.tsx",
                lineNumber: 81,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$src$2f$components$2f$FinalCTA$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Brocan+Blogs/nextjs-mdx-blog/src/components/ClientBlogContent.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(ClientBlogContent, "Th0PdqHTpXuvoRkZN8vGQsT6+CA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$src$2f$hooks$2f$useScrollAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$src$2f$hooks$2f$useScrollAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollAnimation"]
    ];
});
_c = ClientBlogContent;
var _c;
__turbopack_context__.k.register(_c, "ClientBlogContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Brocan%2BBlogs_nextjs-mdx-blog_src_d101c5f7._.js.map