export const DSARandomAttack = {
  successes: {
    attack: {
      distance: {
        title: "Fernkampf Angriff",
        description: "Kritischer Fernkampf Angriff",
        image: "img/fernkampf-angriff-erfolg.jpg",
        imagetitle: "Kritischer Fernkampf Angrif",
        table: {
          "Leichter Treffer": [
            "Der Treffer richtet +1 TP an",
            "Der Treffer richtet +3 TP an"
          ],
          "Leicht Betäubender Treffer": [
            "Der Treffer richtet +1 TP an und der Gegner erhält 1 Stufe Betäubung für 1 KR",
            "Der Treffer richtet +2 TP an und der Gegner erhält 1 Stufe Betäubung für 2 KR",
            "Der Treffer richtet +3 TP an und der Gegner erhält 1 Stufe Betäubung für 3 KR"
          ],
          "Mittelschwerer Treffer": [
            "Die Trefferpunkte samt Modifikatioren werden veranderthalbfacht (aufgerundet) und der Gegner erhält den Status Blutend",
            "Die Trefferpunkte samt Modifikatioren werden veranderthalbfacht (aufgerundet)",
            "Der Gegner erhält den Status Blutend",
            "Der Gegner muss eine Probe auf Körperbeherrschung (Kampfmanöver) bestehen, bei Misslinger erleidet er den Status Liegend."
          ],
          "Mittelschwerer schmerzhafter Treffer": [
            "Die Trefferpunkte samt Modifikatioren werden veranderthalbfacht (aufgerundet) und der Gegner erhält für 2 KR 1 Stufe Schmerz",
            "Die Trefferpunkte samt Modifikatioren werden veranderthalbfacht (aufgerundet) und der Gegner erhält für 2 KR 1 Stufe Schmerz sowie den Status Blutend",
            "Die Trefferpunkte samt Modifikatioren werden veranderthalbfacht (aufgerundet) und der Gegner erhält für 2 KR 1 Stufe Schmerz sowie den Status Betäubung",
            "Der Gegner erhält für 1 KR 1 Stufe Schmerz",
            "Der Gegner erhält für 2 KR 1 Stufe Schmerz",
            "Der Gegner erhält für 2 KR 1 Stufe Schmerz sowie den Status Blutend",
          ],
          "Mittelschwerer Betäubender Treffer": [
            "mip mip"
          ],
          "Schwerer Treffer": [
            "mip mip"
         ],
          "Schwerer Betäubender Treffer": [
            "mip mip"
         ],
          "Schwerer Schwmerzhafter Treffer": [
            "mip mip"
         ],
          "Aus dem Gleichgewicht gebracht": [
            "mip mip"
         ],
          "Gehirn Erschütterung": [
            "mip mip"
         ],
          "Extrem Schwerer Treffer": [
            "mip mip"
         ],
       }
      },
      combat: {
        title: "Nahkampf Angriff",
        description: "Kritischer Nahkampf Angriff",
        image: "img/nahkampf-angriff-erfolg.jpg",
        imagetitle: "Kritischer Nahkampf Angriff",
        table: {
          "test": ["test"]
        }
      }
    },
    defend: {
      distance: {
        title: "Fernkampf Verteidigung",
        description: "Kritische Fernkampf Verteidigung",
        image: "img/fernkampf-verteidigung-erfolg.jpg",
        imagetitle: "Kritische Fernkampf Verteidigung",
        table: {
          "test": ["test1"]
        }
      },
      combat: {
        title: "Nahkampf Verteidigung",
        description: "Kritische Nahkampf Verteidigung",
        image: "img/nahkampf-verteidigung-erfolg.jpg",
        imagetitle: "Kritische Nahkampf Verteidigung",
        table: {
          "test": ["test1"]
        }
      }
    }
  },
  fails: {
    attack: {
      distance: {
        title: "Fernkampf Fehlschlag",
        description: "Fernkampf Angriff Fehlschlag",
        image: "img/fernkampf-angriff-fehlschlag.jpg",
        imagetitle: "Fernkampf Angriff Fehlschlag",
        table: {
          "test": ["test1"]
        }
      },
      combat: {
        title: "Nahkampf Fehlschlag",
        description: "Nahkampf Angriff Fehlschlag",
        image: "img/nahkampf-angriff-fehlschlag.jpg",
        imagetitle: "Nahkampf Angriff Fehlschlag",
        table: {
          "test": ["test1"]
        }
      }
    },
    defend: {
      distance: {
        title: "Fernkampf Verteidigung Fehlschlag",
        description: "Fernkampf Verteidigung Fehlschlag",
        image: "img/fernkampf-verteidigung-fehlschlag.jpg",
        imagetitle: "Fernkampf Verteidigung Fehlschlag",
        table: {
          "test": ["test1"]
        }

      },
      combat: {
        title: "Nahkampf Verteidigung Fehlschlag",
        description: "Nahkampf Verteidigung Fehlschlag",
        image: "img/nahkampf-verteidigung-fehlschlag.jpg",
        imagetitle: "Nahkampf Verteidigung Fehlschlag",
        table: {
          "test": ["test1"]
        }
      }
    }
  }
};
