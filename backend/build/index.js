"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const app = (0, fastify_1.default)();
app.register(cors_1.default);
app.get("/users", () => __awaiter(void 0, void 0, void 0, function* () {
    return prisma.user.findMany();
}));
app.get("/jokes", () => __awaiter(void 0, void 0, void 0, function* () {
    return prisma.joke.findMany();
}));
app.get("/jokes_random", (req, reply) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield prisma.joke.findMany();
    const indiceAleatorio = Math.floor(Math.random() * usuarios.length);
    return prisma.joke.findUnique({ where: { id: Number(indiceAleatorio) } });
}));
app.get("/users/:id", (req, reply) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    return prisma.user.findUnique({ where: { id: Number(id) } });
}));
app.post("/users", (req, reply) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password } = req.body;
    return prisma.user.create({ data: { name, email, password } });
}));
app.put("/users/:id", (req, reply) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, email, password } = req.body;
    return prisma.user.update({
        where: { id: Number(id) },
        data: { name, email, password },
    });
}));
app.delete("/users/:id", (req, reply) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    return prisma.user.delete({ where: { id: Number(id) } });
}));
app.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).send({
            message: "Missing username or password",
        });
        return;
    }
    return prisma.user
        .findUnique({
        where: {
            email: email,
        },
    })
        .then((user) => {
        if (user) {
            if (user.password === password) {
                return res.send({
                    message: "User authenticated successfully",
                    // userToken: user.token,
                    user: {
                        email: user.email,
                        id: user.id,
                        name: user.name,
                    },
                });
            }
            else {
                return res.status(400).send({
                    message: "Incorrect password",
                });
            }
        }
        else {
            return res.status(400).send({
                message: "No user found",
            });
        }
    });
}));
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield prisma.$connect();
        yield app.listen({ port: 4000 });
        console.log("Users API listening on port 4000!");
    }
    catch (err) {
        console.error(err);
    }
});
start();
