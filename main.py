import time
import subprocess
import platform
from datetime import datetime, timedelta
from rich.console import Console
from rich.text import Text
from rich.panel import Panel
from rich.align import Align
from rich.layout import Layout
from rich import box
from rich.theme import Theme

# Configuration Royale
CUSTOM_THEME = Theme({
    "royal_purple": "1,0,1",
    "bright_royal": "#d580d5",
    "dark_royal": "#5c2f7a",
    "accent": "#ff5fff",
    "gold": "#ffd700",
    "terminal": "bold"
})

console = Console(theme=CUSTOM_THEME)

# ASCII LOGO ROYAL (à afficher dans Termux)
ROYAL_LOGO = """
  ██████╗ ██╗   ██╗ █████╗ ███████╗ ██████╗ ███████╗ ██████╗ ██████╗ ██████╗  ██████╗██╗  ██╗
 ██╔══██╗██║   ██║██╔══██╗██╔════╝██╔════╝██╔════╝██╔═══██╗██╔══██╗██╔══██╗██╔════╝██║  ██║
 ██████╔╝██║  ██║███████║███████╗██║    █████╗ ██║   ██║██████╔╝██║ ██║██║    ███████║
 ██╔══██╗██║  ██║██╔══██║╚════██║██║    ██╔══╝ ██║   ██║██╔══██╗██║ ██║██║    ██╔══██║
 ██║  ██║╚██████╔╝██║  ██║███████║╚██████╗███████╗╚██████╔╝██████╔╝██████╔╝╚██████╗██║  ██║
 ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝ ╚═════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝
"""

def play_matrix_intro():
    """Animation des lignes violet et ligne."""
    with console.capture() as capture:
    for i in range(20):
    # Simule des lignes vertes (Matrix style)
    console.print("\033[32m" + "." * (i+5) + "\033[0m", end="", flush=True)
    time.sleep(0.1)
  
    # Simule des lignes violet (Royal style)
    console.print("\033[95m" + "█" * (i+3) + "\033[0m", end="\r", flush=True)
    time.sleep(0.15)
   console.clear()

def run_ban_tool():
    console.clear()
    play_matrix_intro()
  
    # Affichage Royal
    royal_banner = Text.assemble(
    ("𝐊𝐈𝐍𝐆 𝐁𝐀𝐍𝐍𝐄𝐃 𝐕1", "bright_royal bold"),
    ("\n\n", "normal"),
    ("𝐑𝐎𝐘𝐀𝐋 𝐓𝐄𝐂𝐇𝐍𝐎𝐋𝐎𝐆𝐈𝐄𝐒", "royal_purple"),
   )
  
    # Logos ASCII au sein de la console
    logo_panel = Panel(
    Align.center(Royal_LOGO, vertical="top"),
    box=box.DOUBLE_ROUND,
    padding=(1, 2),
    border_style="bright_royal",
    title="[gold]Welcome, King Stark[/gold]"
   )
  
    console.print(logo_panel)
    console.print(royal_banner)
  
    # Saisie du numéro
    number = console.input("[bold]>= Entrer le numéro CIBLE (avec pays, ex: 509 𝐗𝐗 𝐗𝐗 𝐗𝐗𝐗𝐗): [/bold] ")
  
    # Saisie des signaux
    try:
    signals_str = console.input("[bold bright_gold]>= De combien de fois dois-je signaler le compte? [/bold] ")
    signals = int(signals_str)
    except ValueError:
    console.print("[red]Erreur: Veuillez entrer un nombre valide.[/red]")
   return

    # Calcul pour la date d'expiration
    # Logique: Chaque signal prend un peu de temps. On simule un délai.
    calculation_text = "Calcul gestion temporelle..."
    console.print(f"[dim]{calculation_text}[/dim]")
  
    # Simulation de travail
    for i in range(signals):
    time.sleep(0.05)
  
    # Date d'expiration estimée (Date actuelle + durée estimée des signaux)
    duration = timedelta(minutes=symbols) if False else timedelta(days=1)# Juste pour l'exemple
    # On simplifie: on génère une date aléatoire proche du futur pour l'effet royal
    expiry_date = (datetime.now() + timedelta(hours=1)).strftime("%Y-%m-%d %H:%M:%S")
  
    # Exécution des actions
    console.print(f"\n[royal_purple]>>> KING BANNED V1 détecte {signals} signaux d'intention.[/royal_purple]")
    console.print(f"[bright_gold]>>> Date d'expiration estimée du processus: {expiry_date}[/bright_gold]\n")
  
    opened_count = 0
    base_url = "https://wa.me/"
  
    # Boucle pour ouvrir les conversations
    while opened_count < signals:
    full_url = base_url + number
    console.print(f"[bright_royal]>>> [FLOOD] Ouverture Signal {opened_count + 1}/{signals} sur {full_url}...", end="\r")
  
    try:
    if platform.system() == "Linux":
    # Tente d'ouvrir le navigateur sous Linux/Android via Termux
    subprocess.run(["xdg-open", full_url], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    except Exception as e:
    console.print(f"\n[red]Erreur lors de l'ouverture: {e}[/red]")
   break
  
    opened_count += 1
    time.sleep(1) # Pause entre chaque signal pour simuler la puissance

    # Message Final Royal
    console.print("\n\n")
    final_logo = Panel(
    Text.assemble(
    ("𝐊𝐈𝐍𝐆 𝐁𝐀𝐍𝐍𝐄𝐃", "bright_royal bold"),
   ("\n    — 𝗗𝗘𝗩 𝗕𝗬 𝗞𝐈𝐍𝐆 𝐒𝐓𝐀𝐑𝐊 —", "dark_royal"),
    ("\n", "dim"),
    ("[gold]Tool exécuté avec succès.[/gold]", "gold italic"),
   ),
    box=box.ROUNDED,
    border_style="bright_royal"
   )
   console.print(final_logo)

if __name__ == "__main__":
    run_ban_tool(