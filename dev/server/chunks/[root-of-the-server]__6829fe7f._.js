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
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[project]/Brocan+Blogs/nextjs-mdx-blog/src/lib/mdx.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllPostSlugs",
    ()=>getAllPostSlugs,
    "getAllPosts",
    ()=>getAllPosts,
    "getPostBySlug",
    ()=>getPostBySlug,
    "getPostsByCategory",
    ()=>getPostsByCategory,
    "getPostsByTag",
    ()=>getPostsByTag
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$gray$2d$matter$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Brocan+Blogs/nextjs-mdx-blog/node_modules/gray-matter/index.js [app-route] (ecmascript)");
;
;
;
const postsDirectory = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'src/content/posts');
function getAllPostSlugs() {
    try {
        const fileNames = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readdirSync(postsDirectory);
        return fileNames.filter((name)=>name.endsWith('.mdx')).map((name)=>name.replace(/\.mdx$/, ''));
    } catch (error) {
        console.error('Error reading posts directory:', error);
        return [];
    }
}
function getPostBySlug(slug) {
    try {
        const fullPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(postsDirectory, `${slug}.mdx`);
        if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(fullPath)) {
            return null;
        }
        const fileContents = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(fullPath, 'utf8');
        const { data, content } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$gray$2d$matter$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(fileContents);
        const meta = {
            slug,
            title: data.title || 'Untitled',
            description: data.description || '',
            date: data.date || new Date().toISOString().split('T')[0],
            coverImage: data.coverImage || '/images/default-cover.svg',
            author: data.author || 'Anonymous',
            category: data.category || 'General',
            tags: data.tags || [],
            seoTitle: data.seoTitle || data.title || 'Untitled',
            seoDescription: data.seoDescription || data.description || ''
        };
        return {
            meta,
            content
        };
    } catch (error) {
        console.error(`Error reading post ${slug}:`, error);
        return null;
    }
}
function getAllPosts() {
    try {
        const slugs = getAllPostSlugs();
        const posts = slugs.map((slug)=>{
            const post = getPostBySlug(slug);
            return post?.meta;
        }).filter((post)=>post !== undefined).sort((a, b)=>new Date(b.date).getTime() - new Date(a.date).getTime());
        return posts;
    } catch (error) {
        console.error('Error getting all posts:', error);
        return [];
    }
}
function getPostsByCategory(category) {
    const allPosts = getAllPosts();
    return allPosts.filter((post)=>post.category?.toLowerCase() === category.toLowerCase());
}
function getPostsByTag(tag) {
    const allPosts = getAllPosts();
    return allPosts.filter((post)=>post.tags?.some((postTag)=>postTag.toLowerCase() === tag.toLowerCase()));
}
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

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
"[project]/Brocan+Blogs/nextjs-mdx-blog/src/app/api/admin/posts/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Brocan+Blogs/nextjs-mdx-blog/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$src$2f$lib$2f$mdx$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Brocan+Blogs/nextjs-mdx-blog/src/lib/mdx.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$src$2f$lib$2f$middleware$2d$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Brocan+Blogs/nextjs-mdx-blog/src/lib/middleware-auth.ts [app-route] (ecmascript)");
;
;
;
async function getPostsHandler(request) {
    try {
        const posts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$src$2f$lib$2f$mdx$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllPosts"])();
        return __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to fetch posts'
        }, {
            status: 500
        });
    }
}
const GET = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Brocan$2b$Blogs$2f$nextjs$2d$mdx$2d$blog$2f$src$2f$lib$2f$middleware$2d$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withAuth"])(getPostsHandler);
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6829fe7f._.js.map