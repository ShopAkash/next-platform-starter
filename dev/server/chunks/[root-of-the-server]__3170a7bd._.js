module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[project]/Brocan+Blogs/nextjs-mdx-blog/src/lib/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authenticateUser",
    ()=>authenticateUser,
    "generateToken",
    ()=>generateToken,
    "getTokenFromRequest",
    ()=>getTokenFromRequest,
    "hashPassword",
    ()=>hashPassword,
    "verifyPassword",
    ()=>verifyPassword,
    "verifyToken",
    ()=>verifyToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Brocan+Blogs/nextjs-mdx-blog/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Brocan+Blogs/nextjs-mdx-blog/node_modules/jsonwebtoken/index.js [app-route] (ecmascript)");
;
;
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'tempacc.akash@gmail.com';
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH || '$2a$12$F1imBncHnVihTH4mpwAdju/2wbHidQKQKEUpK0pAWIREZjsxvwcw.'; // 'Akrsh@gmail.com'
async function verifyPassword(password, hash) {
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].compare(password, hash);
    } catch (error) {
        console.error('bcrypt.compare error:', error);
        return false;
    }
}
async function hashPassword(password) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].hash(password, 12);
}
function generateToken(user) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].sign({
        email: user.email,
        username: user.username,
        role: user.role
    }, JWT_SECRET, {
        expiresIn: '24h'
    });
}
function verifyToken(token) {
    try {
        const decoded = __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].verify(token, JWT_SECRET);
        return {
            email: decoded.email,
            username: decoded.username || decoded.email.split('@')[0],
            role: decoded.role
        };
    } catch (error) {
        return null;
    }
}
async function authenticateUser(email, password) {
    if (email !== ADMIN_EMAIL) {
        return null;
    }
    const isValid = await verifyPassword(password, ADMIN_PASSWORD_HASH);
    if (!isValid) {
        return null;
    }
    return {
        email,
        username: email.split('@')[0],
        role: 'admin'
    };
}
function getTokenFromRequest(request) {
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return null;
    }
    return authHeader.substring(7);
}
}),
"[project]/Brocan+Blogs/nextjs-mdx-blog/src/lib/middleware-auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "withAuth",
    ()=>withAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Brocan+Blogs/nextjs-mdx-blog/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Brocan+Blogs/nextjs-mdx-blog/src/lib/auth.ts [app-route] (ecmascript)");
;
;
function withAuth(handler) {
    return async (request, ...args)=>{
        try {
            const token = request.cookies.get('auth-token')?.value;
            if (!token) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Authentication required'
                }, {
                    status: 401
                });
            }
            const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyToken"])(token);
            if (!user) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Invalid or expired token'
                }, {
                    status: 401
                });
            }
            // Add user to request context
            request.user = user;
            return handler(request, ...args);
        } catch (error) {
            console.error('Auth middleware error:', error);
            return __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Authentication failed'
            }, {
                status: 401
            });
        }
    };
}
}),
"[project]/Brocan+Blogs/nextjs-mdx-blog/src/app/api/admin/create-post/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Brocan+Blogs/nextjs-mdx-blog/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$src$2f$lib$2f$middleware$2d$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Brocan+Blogs/nextjs-mdx-blog/src/lib/middleware-auth.ts [app-route] (ecmascript)");
;
;
;
;
async function createPostHandler(request) {
    try {
        const { slug, content } = await request.json();
        if (!slug || !content) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Slug and content are required'
            }, {
                status: 400
            });
        }
        // Validate slug format
        const validSlug = /^[a-z0-9-]+$/.test(slug);
        if (!validSlug) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Invalid slug format. Use only lowercase letters, numbers, and hyphens.'
            }, {
                status: 400
            });
        }
        const postsDirectory = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'src/content/posts');
        const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(postsDirectory, `${slug}.mdx`);
        // Check if file already exists
        if (__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(filePath)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'A blog post with this title already exists'
            }, {
                status: 409
            });
        }
        // Ensure the posts directory exists
        if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(postsDirectory)) {
            __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].mkdirSync(postsDirectory, {
                recursive: true
            });
        }
        // Write the file
        __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(filePath, content, 'utf8');
        return __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: 'Blog post created successfully',
            slug,
            filePath: `src/content/posts/${slug}.mdx`
        }, {
            status: 201
        });
    } catch (error) {
        console.error('Error creating blog post:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Internal server error'
        }, {
            status: 500
        });
    }
}
const POST = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$src$2f$lib$2f$middleware$2d$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withAuth"])(createPostHandler);
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3170a7bd._.js.map