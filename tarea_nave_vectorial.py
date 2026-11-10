import pygame
import math

# ---------------- Configuración ----------------
WIDTH, HEIGHT = 800, 600
FPS = 60

# Colores
FONDO = (10, 10, 30)
COLOR_NAVE = (0, 255, 200)
COLOR_PROYECTIL = (255, 220, 0)

# ---------------- Inicialización ----------------
pygame.init()
pantalla = pygame.display.set_mode((WIDTH, HEIGHT), pygame.DOUBLEBUF)
pygame.display.set_caption("Nave Vectorial")
reloj = pygame.time.Clock()
fuente = pygame.font.SysFont("consolas", 16)

# ---------------- Modelo local de la nave ----------------
# Proa en (0, -25). El centroide local está cerca de (0, 0).
MODELO_NAVE = [
    (0, -25),    # proa
    (-15, 15),   # ala izquierda
    (15, 15),    # ala derecha
]

# ---------------- Estado de la nave ----------------
nave_x, nave_y = 400.0, 300.0
nave_angulo = 0.0          # radianes, 0 = apuntando hacia arriba
VEL_ROTACION = math.radians(180)  # rad/s
VEL_AVANCE = 200.0         # px/s

# ---------------- Proyectiles ----------------
proyectiles = []           # lista de dicts
COOLDOWN = 0.25            # 250 ms
ultimo_disparo = -COOLDOWN
VIDA_PROYECTIL = 3.0       # segundos
VEL_PROYECTIL = 500.0      # px/s (más rápido que la nave)


def transformar_vertices():
    """Rota y traslada el modelo local al espacio de pantalla."""
    cos_a, sin_a = math.cos(nave_angulo), math.sin(nave_angulo)
    vertices = []
    for vx, vy in MODELO_NAVE:
        rx = vx * cos_a - vy * sin_a
        ry = vx * sin_a + vy * cos_a
        vertices.append((nave_x + rx, nave_y + ry))
    return vertices


def punta_nave():
    """Calcula la posición exacta de la proa en pantalla."""
    cos_a, sin_a = math.cos(nave_angulo), math.sin(nave_angulo)
    vx, vy = MODELO_NAVE[0]  # (0, -25)
    return (nave_x + vx * cos_a - vy * sin_a,
            nave_y + vx * sin_a + vy * cos_a)


def envolver(x, y):
    """Reto opcional: pantalla envolvente."""
    return x % WIDTH, y % HEIGHT


def disparar(tiempo_actual):
    global ultimo_disparo
    if tiempo_actual - ultimo_disparo < COOLDOWN:
        return
    ultimo_disparo = tiempo_actual
    px, py = punta_nave()
    # Dirección de la proa: (sin, -cos) para ángulo 0 apuntando arriba
    vx = math.sin(nave_angulo) * VEL_PROYECTIL
    vy = -math.cos(nave_angulo) * VEL_PROYECTIL
    proyectiles.append({
        "x": px, "y": py,
        "vx": vx, "vy": vy,
        "vida": VIDA_PROYECTIL,
    })


# ---------------- Bucle principal ----------------
ejecutando = True
while ejecutando:
    dt = reloj.tick(FPS) / 1000.0
    tiempo_actual = pygame.time.get_ticks() / 1000.0

    # ----- Eventos -----
    for evento in pygame.event.get():
        if evento.type == pygame.QUIT:
            ejecutando = False
        elif evento.type == pygame.KEYDOWN:
            if evento.key == pygame.K_SPACE:
                disparar(tiempo_actual)

    # ----- Entrada continua -----
    teclas = pygame.key.get_pressed()
    if teclas[pygame.K_a] or teclas[pygame.K_LEFT]:
        nave_angulo -= VEL_ROTACION * dt
    if teclas[pygame.K_d] or teclas[pygame.K_RIGHT]:
        nave_angulo += VEL_ROTACION * dt

    if teclas[pygame.K_w] or teclas[pygame.K_UP]:
        nave_x += math.sin(nave_angulo) * VEL_AVANCE * dt
        nave_y += -math.cos(nave_angulo) * VEL_AVANCE * dt

    # Reto opcional: wrapping de la nave
    nave_x, nave_y = envolver(nave_x, nave_y)

    # ----- Actualizar proyectiles -----
    for p in proyectiles:
        p["x"] += p["vx"] * dt
        p["y"] += p["vy"] * dt
        p["vida"] -= dt

    # Eliminar por vida o por salir de los bordes
    proyectiles = [
        p for p in proyectiles
        if p["vida"] > 0 and 0 <= p["x"] <= WIDTH and 0 <= p["y"] <= HEIGHT
    ]

    # ----- Dibujo -----
    pantalla.fill(FONDO)

    # Nave
    pygame.draw.polygon(pantalla, COLOR_NAVE, transformar_vertices(), 2)

    # Proyectiles
    for p in proyectiles:
        pygame.draw.circle(pantalla, COLOR_PROYECTIL, (int(p["x"]), int(p["y"])), 3)

    # HUD
    hud = fuente.render(
        f"FPS: {reloj.get_fps():.0f}  |  Proyectiles: {len(proyectiles)}  |  "
        f"A/D girar  W avanzar  ESPACIO disparar",
        True, (200, 200, 200)
    )
    pantalla.blit(hud, (10, 10))

    pygame.display.flip()

pygame.quit()