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
          "Die Trefferpunkte samt Modifikatoren werden veranderthalbfacht (aufgerundet) und dem Gegner muss eine Probe auf Selbstbeherrschung (Handlungsfähigkeit bewahren) gelingen, um nicht für 3 KR den Status Bewusstlos zu erleiden. Gleich ob die Probe ge- oder misslungen ist, erleidet der Held 1 Stufe Betäubung für 8 KR.",
          "Die Trefferpunkte samt Modifikatoren werden veranderthalbfacht (aufgerundet) und der Gegner erhält für 5 KR 2 Stufen Betäubung.",
          "Die Trefferpunkte samt Modifikatoren werden veranderthalbfacht (aufgerundet) und der Gegner erhält für 8 KR 1 Stufe Betäubung.",
          "Die Trefferpunkte samt Modifikatoren werden veranderthalbfacht (aufgerundet) und der Gegner erhält für 5 KR 1 Stufe Betäubung.",
          "Der Treffer richtet +1 TP an und der Gegner erhält für 5 KR 1 Stufe Betäubung.",
          "Der Treffer richtet +1 TP an und der Gegner erhält für 3 KR 2 Stufen Betäubung.",
          "Der Treffer richtet +1 TP an und der Gegner erhält für 1 KR 2 Stufen Betäubung."
          ],
          "Schwerer Treffer": [
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und der Gegner erhält für 5 KR 1 Stufe Betäubung sowie den Status Blutend.",
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und der Gegner erhält für 5 KR 1 Stufe Betäubung.",
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und der Gegner erhält den Status Blutend.",
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt TP werden verdoppelt und der Gegner erhält 1 Stufe Schmerz für 2 KR.",
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt.",
          "Der Treffer richtet +5 TP an und der Gegner muss eine Probe auf Körperbeherrschung (Kampfmanöver) –1 bestehen, bei Misslingen erleidet er den Status Liegend.",
          "Der Treffer richtet +3 TP an und der Gegner muss eine Probe auf Körperbeherrschung (Kampfmanöver) –1 bestehen, bei Misslingen erleidet er den Status Liegend.",
          "Der Treffer richtet +1 TP an und der Gegner muss eine Probe auf Körperbeherrschung (Kampfmanöver) –1 bestehen, bei Misslingen erleidet er den Status Liegend."
          ],
          "Schwerer Betäubender Treffer": [
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und dem Gegner muss eine Probe auf Selbstbeherrschung (Handlungsfähigkeit bewahren) –1 gelingen, um nicht für 5 KR den Status Bewusstlos zu erleiden.",
          "Gleich ob die Probe ge- oder misslungen ist, erleidet der Held 1 Stufe Betäubung für 10 KR.",
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und Gegner erhält für 5 KR 2 Stufen Betäubung.",
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und Gegner erhält für 8 KR 1 Stufe Betäubung.",
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und Gegner erhält für 5 KR 1 Stufe Betäubung.",
          "Der Treffer richtet +3 TP an und der Gegner erhält für 5 KR 1 Stufe Betäubung.",
          "Der Treffer richtet +3 TP an und der Gegner erhält für 3 KR 2 Stufen Betäubung.",
          "Der Treffer richtet +3 TP an und der Gegner erhält für 1 KR 2 Stufen Betäubung."
          ],
          "Schwerer Schwmerzhafter Treffer": [
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und der Gegner erhält für 5 KR 1 Stufe Schmerz sowie 1 Stufe Betäubung.",
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und der Gegner erhält für 5 KR 1 Stufe Schmerz sowie den Status Blutend.",
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und der Gegner erhält für 5 KR 1 Stufe Schmerz.",
          "Der Gegner erhält für 5 KR 1 Stufe Schmerz sowie den Status Blutend.",
          "Der Gegner erhält für 5 KR 1 Stufe Schmerz.",
          "Der Gegner erhält für 5 KR 2 Stufen Schmerz."
          ],
          "Aus dem Gleichgewicht gebracht": [
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und der Gegner erleidet bis zum Ende der nächsten KR eine Erschwernis von 2 auf Verteidigung. Außerdem muss er eine Probe auf Körperbeherrschung (Kampfmanöver) –2 bestehen, bei Misslingen erleidet er den Status Liegend.",
          "Die Trefferpunkte samt Modifikatoren werden veranderthalbfacht (aufgerundet) und der Gegner erleidet bis zum Ende der nächsten KR eine Erschwernis von 2 auf Verteidigung. Außerdem muss er eine Probe auf Körperbeherrschung (Kampfmanöver) bestehen, bei Misslingen erleidet er den Status Liegend.",
          "Der Gegner erleidet bis zum Ende der nächsten KR eine Erschwernis von 4 auf Verteidigung. Außerdem muss er eine Probe auf Körperbeherrschung (Kampfmanöver) –2 bestehen, bei Misslingen erleidet er den Status Liegend.",
          "Der Gegner erleidet bis zum Ende der nächsten KR eine Erschwernis von 2 auf Verteidigung. Außerdem muss er eine Probe auf Körperbeherrschung (Kampfmanöver) bestehen, bei Misslingen erleidet er den Status Liegend."
          ],
          "Gehirn Erschütterung": [
          "Die Trefferpunkte samt Modifikatoren werden veranderthalbfacht (aufgerundet) und dem Gegner muss eine Probe auf Selbstbeherrschung (Handlungsfähigkeit bewahren) –2 gelingen, um nicht für 5 KR den Status Bewusstlos zu erleiden. Gleich ob die Probe ge- oder misslungen ist, erleidet der Held 2 Stufen Betäubung für 1 Stunde.",
          "Dem Gegner muss eine Probe auf Selbstbeherrschung (Handlungsfähigkeit bewahren) –2 gelingen, um nicht für 5 KR den Status Bewusstlos zu erleiden. Gleichob die Probe ge- oder misslungen ist, erleidet der Held 2 Stufen Betäubung für 1 Stunde.",
          "Dem Gegner muss eine Probe auf Selbstbeherrschung (Handlungsfähigkeit bewahren) gelingen, um nicht für 5 KR den Status Bewusstlos zu erleiden. Gleich ob die Probe ge- oder misslungen ist, erleidet der Held 1 Stufe Betäubung für 1 Stunde."
          ],
          "Extrem Schwerer Treffer": [
          "Die Trefferpunkte samt Modifikatoren werden verdreifacht.",
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und dem Gegner muss eine Probe auf Selbstbeherrschung (Handlungsfähigkeit bewahren) gelingen, um nicht für 1W3 KR den Status Handlungsunfähig zu erleiden. Gleich ob die Probe ge- oder misslungen ist, erleidet der Held 1 Stufe Schmerz für 3 KR."
          ],
        }
      },
      combat: {
        title: "Nahkampf Angriff",
        description: "Kritischer Nahkampf Angriff",
        image: "img/nahkampf-angriff-erfolg.jpg",
        imagetitle: "Kritischer Nahkampf Angriff",
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
          "Die Trefferpunkte samt Modifikatoren werden veranderthalbfacht (aufgerundet) und dem Gegner muss eine Probe auf Selbstbeherrschung (Handlungsfähigkeit bewahren) gelingen, um nicht für 3 KR den Status Bewusstlos zu erleiden. Gleich ob die Probe ge- oder misslungen ist, erleidet der Held 1 Stufe Betäubung für 8 KR.",
          "Die Trefferpunkte samt Modifikatoren werden veranderthalbfacht (aufgerundet) und der Gegner erhält für 5 KR 2 Stufen Betäubung.",
          "Die Trefferpunkte samt Modifikatoren werden veranderthalbfacht (aufgerundet) und der Gegner erhält für 8 KR 1 Stufe Betäubung.",
          "Die Trefferpunkte samt Modifikatoren werden veranderthalbfacht (aufgerundet) und der Gegner erhält für 5 KR 1 Stufe Betäubung.",
          "Der Treffer richtet +1 TP an und der Gegner erhält für 5 KR 1 Stufe Betäubung.",
          "Der Treffer richtet +1 TP an und der Gegner erhält für 3 KR 2 Stufen Betäubung.",
          "Der Treffer richtet +1 TP an und der Gegner erhält für 1 KR 2 Stufen Betäubung."
          ],
          "Schwerer Treffer": [
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und der Gegner erhält für 5 KR 1 Stufe Betäubung sowie den Status Blutend.",
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und der Gegner erhält für 5 KR 1 Stufe Betäubung.",
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und der Gegner erhält den Status Blutend.",
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt TP werden verdoppelt und der Gegner erhält 1 Stufe Schmerz für 2 KR.",
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt.",
          "Der Treffer richtet +5 TP an und der Gegner muss eine Probe auf Körperbeherrschung (Kampfmanöver) –1 bestehen, bei Misslingen erleidet er den Status Liegend.",
          "Der Treffer richtet +3 TP an und der Gegner muss eine Probe auf Körperbeherrschung (Kampfmanöver) –1 bestehen, bei Misslingen erleidet er den Status Liegend.",
          "Der Treffer richtet +1 TP an und der Gegner muss eine Probe auf Körperbeherrschung (Kampfmanöver) –1 bestehen, bei Misslingen erleidet er den Status Liegend."
          ],
          "Schwerer Betäubender Treffer": [
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und dem Gegner muss eine Probe auf Selbstbeherrschung (Handlungsfähigkeit bewahren) –1 gelingen, um nicht für 5 KR den Status Bewusstlos zu erleiden.",
          "Gleich ob die Probe ge- oder misslungen ist, erleidet der Held 1 Stufe Betäubung für 10 KR.",
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und Gegner erhält für 5 KR 2 Stufen Betäubung.",
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und Gegner erhält für 8 KR 1 Stufe Betäubung.",
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und Gegner erhält für 5 KR 1 Stufe Betäubung.",
          "Der Treffer richtet +3 TP an und der Gegner erhält für 5 KR 1 Stufe Betäubung.",
          "Der Treffer richtet +3 TP an und der Gegner erhält für 3 KR 2 Stufen Betäubung.",
          "Der Treffer richtet +3 TP an und der Gegner erhält für 1 KR 2 Stufen Betäubung."
          ],
          "Schwerer Schwmerzhafter Treffer": [
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und der Gegner erhält für 5 KR 1 Stufe Schmerz sowie 1 Stufe Betäubung.",
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und der Gegner erhält für 5 KR 1 Stufe Schmerz sowie den Status Blutend.",
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und der Gegner erhält für 5 KR 1 Stufe Schmerz.",
          "Der Gegner erhält für 5 KR 1 Stufe Schmerz sowie den Status Blutend.",
          "Der Gegner erhält für 5 KR 1 Stufe Schmerz.",
          "Der Gegner erhält für 5 KR 2 Stufen Schmerz."
          ],
          "Aus dem Gleichgewicht gebracht": [
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und der Gegner erleidet bis zum Ende der nächsten KR eine Erschwernis von 2 auf Verteidigung. Außerdem muss er eine Probe auf Körperbeherrschung (Kampfmanöver) –2 bestehen, bei Misslingen erleidet er den Status Liegend.",
          "Die Trefferpunkte samt Modifikatoren werden veranderthalbfacht (aufgerundet) und der Gegner erleidet bis zum Ende der nächsten KR eine Erschwernis von 2 auf Verteidigung. Außerdem muss er eine Probe auf Körperbeherrschung (Kampfmanöver) bestehen, bei Misslingen erleidet er den Status Liegend.",
          "Der Gegner erleidet bis zum Ende der nächsten KR eine Erschwernis von 4 auf Verteidigung. Außerdem muss er eine Probe auf Körperbeherrschung (Kampfmanöver) –2 bestehen, bei Misslingen erleidet er den Status Liegend.",
          "Der Gegner erleidet bis zum Ende der nächsten KR eine Erschwernis von 2 auf Verteidigung. Außerdem muss er eine Probe auf Körperbeherrschung (Kampfmanöver) bestehen, bei Misslingen erleidet er den Status Liegend."
          ],
          "Gehirn Erschütterung": [
          "Die Trefferpunkte samt Modifikatoren werden veranderthalbfacht (aufgerundet) und dem Gegner muss eine Probe auf Selbstbeherrschung (Handlungsfähigkeit bewahren) –2 gelingen, um nicht für 5 KR den Status Bewusstlos zu erleiden. Gleich ob die Probe ge- oder misslungen ist, erleidet der Held 2 Stufen Betäubung für 1 Stunde.",
          "Dem Gegner muss eine Probe auf Selbstbeherrschung (Handlungsfähigkeit bewahren) –2 gelingen, um nicht für 5 KR den Status Bewusstlos zu erleiden. Gleichob die Probe ge- oder misslungen ist, erleidet der Held 2 Stufen Betäubung für 1 Stunde.",
          "Dem Gegner muss eine Probe auf Selbstbeherrschung (Handlungsfähigkeit bewahren) gelingen, um nicht für 5 KR den Status Bewusstlos zu erleiden. Gleich ob die Probe ge- oder misslungen ist, erleidet der Held 1 Stufe Betäubung für 1 Stunde."
          ],
          "Extrem Schwerer Treffer": [
          "Die Trefferpunkte samt Modifikatoren werden verdreifacht.",
          "Die Trefferpunkte samt Modifikatoren werden verdoppelt und dem Gegner muss eine Probe auf Selbstbeherrschung (Handlungsfähigkeit bewahren) gelingen, um nicht für 1W3 KR den Status Handlungsunfähig zu erleiden. Gleich ob die Probe ge- oder misslungen ist, erleidet der Held 1 Stufe Schmerz für 3 KR."
          ],
        }
      }
    },
    defend: {
      distance: {
        title: "Fernkampf Verteidigung",
        description: "Kritische Fernkampf Verteidigung",
        image: "img/fernkampf-verteidigung-erfolg.jpg",
        imagetitle: "Kritische Fernkampf Verteidigung",
        table: {"Sehr gute Gelegenheit zum Angriff": ["Der Held kann bis zum Ende der nächsten KR Erschwernisse auf AT und FK um 2 senken (bis zu einemMaximum von +/–0).","Der Held kann bis zum Ende der nächsten KR Erschwernisse auf AT und FK um 3 senken (bis zu einemMaximum von +/–0), wenn er den Vorteil nutzt, sinktseine Verteidigung im selben Zeitraum um 1."],"Gute Gelegenheit zum Angriff": ["Der Held kann bis zum Ende der nächsten KR Erschwernisse auf AT und FK um 2 senken (bis zu einemMaximum von +/–0), wenn er den Vorteil nutzt, sinktseine Verteidigung im selben Zeitraum um 1.","Der Held kann bis zum Ende der nächsten KR Erschwernisse auf AT und FK um 1 senken (bis zu einemMaximum von +/–0).","Der Held kann bis zum Ende der nächsten KR Erschwernisse auf AT und FK um 1 senken (bis zu einemMaximum von +/–0), außerdem ist die Verteidigung gegen seine Angriffe im selben Zeitraum zusätzlich um 1erschwert."],"Große Verteidigungslücke": ["Die Verteidigung des Gegners, der den Abenteurerangegriffen hat, ist bis zum Ende der nächsten KR gegenden Helden um 3 erschwert, allerdings erleidet der Heldeine Erschwernis von 1 Punkt, sofern er ein Kampfmanöver einsetzt.","Die Verteidigung des Gegners, der den Abenteurerangegriffen hat, ist bis zum Ende der nächsten KR gegenden Helden um 3 erschwert.","Die Verteidigung des Gegners, der den Abenteurer angegriffen hat, ist bis zum Ende der nächsten KRgegen den Helden um 3 erschwert. Außerdem kann derHeld bis zum Ende der nächsten KR einmalig eine Erschwernis von 1 Punkt ignorieren, wenn er ein Manövereinsetzt.","Die Verteidigung des Gegners, der den Abenteurer angegriffen hat, ist bis zum Ende der nächsten KRgegen den Helden um 3 erschwert. Außerdem kann derHeld bis zum Ende der nächsten KR einmalig eine Erschwernis von bis zu 2 Punkten ignorieren, wenn er einManöver einsetzt."],"Kleine Verteidigungslücke": ["Die Verteidigung des Gegners, der den Abenteurerangegriffen hat, ist bis zum Ende der nächsten KR gegenden Helden um 1 erschwert.","Die Verteidigung des Gegners, der den Abenteurerangegriffen hat, ist bis zum Ende der nächsten KR gegenden Helden um 2 erschwert, allerdings erleidet der Heldeine Erschwernis von 1 Punkt, sofern er ein Kampfmanöver einsetzt.","Die Verteidigung des Gegners, der den Abenteurerangegriffen hat, ist bis zum Ende der nächsten KR gegenden Helden um 2 erschwert.","Die Verteidigung des Gegners, der den Abenteurer angegriffen hat, ist bis zum Ende der nächsten KRgegen den Helden um 2 erschwert. Außerdem kann derHeld bis zum Ende der nächsten KR einmalig eine Erschwernis von 1 Punkt ignorieren, wenn er ein Manövereinsetzt.","Die Verteidigung des Gegners, der den Abenteurer angegriffen hat, ist bis zum Ende der nächsten KRgegen den Helden um 2 erschwert. Außerdem kann derHeld bis zum Ende der nächsten KR einmalig eine Erschwernis von bis zu 2 Punkten ignorieren, wenn er einManöver einsetzt.","Die Verteidigung des Gegners, der den Abenteurer angegriffen hat, ist bis zum Ende der nächsten KRgegen den Helden um 2 erschwert. Außerdem kann derHeld bis zum Ende der nächsten KR einmalig eine Erschwernis von bis zu 3 Punkten ignorieren, wenn er einManöver einsetzt."],"Angriffssituation": ["Der Held bekommt bis zum Ende der nächsten KReinen Bonus von +1 AT und +1 FK, allerdings nur soferner keine Basis- oder Spezialmanöver einsetzt.","Der Held bekommt bis zum Ende der nächsten KReinen Bonus von +1 AT und +1 FK, allerdings nur soferner keine Spezialmanöver einsetzt.","Der Held bekommt bis zum Ende der nächsten KReinen Bonus von +1 AT und +1 FK.","Der Held bekommt bis zum Ende der nächsten KR einen Bonus von +1 AT und +1 FK. Darüber hinaus sind Basismanöver im selben Zeitraum zusätzlich um 1 erleichtert.","Der Held bekommt bis zum Ende der nächsten KReinen Bonus von +1 AT und +1 FK. Darüber hinaus sindBasis- und Spezialmanöver im selben Zeitraum zusätzlich um 1 erleichtert.","Der Held bekommt bis zum Ende der nächsten KReinen Bonus von +2 AT und +2 FK. Darüber hinaus sindBasis- und Spezialmanöver im selben Zeitraum zusätzlich um 2 erleichtert.","Der Held bekommt bis zum Ende der nächsten KReinen Bonus von +2 AT und +2 FK. Darüber hinaus sindBasis- und Spezialmanöver im selben Zeitraum zusätzlich um 3 erleichtert."],"Verteidigungsvorteil": ["Der Verteidigungswert sinkt nicht um 3 wie üblichbei der nächsten Verteidigung in dieser Kampfrunde,sondern nur um 2, allerdings sind alle darauf folgendenAktionen bis zum Ende der nächsten KR um 1 erschwert,sofern der Held von dem Vorteil profitiert.","Der Verteidigungswert sinkt nicht um 3 wie üblichbei der nächsten Verteidigung in dieser Kampfrunde,sondern nur um 2.","Der Verteidigungswert sinkt nicht um 3 wie üblichbei der nächsten Verteidigung in dieser Kampfrunde,sondern nur um 1, allerdings sind alle darauf folgendenAktionen bis zum Ende der nächsten KR um 1 erschwert,sofern der Held von dem Vorteil profitiert.","Der Verteidigungswert sinkt nicht um 3 wie üblichbei der nächsten Verteidigung in dieser Kampfrunde,sondern nur um 1.","Der Verteidigungswert sinkt nicht um 3 wie üblichbei der nächsten Verteidigung in dieser Kampfrunde.","Der Verteidigungswert sinkt nicht um 3 wie üblichbei der nächsten Verteidigung in dieser Kampfrunde.Darüber hinaus sind alle Angriffe gegen den Helden biszum Ende der nächsten KR um 1 zusätzlich erschwert.","Der Verteidigungswert sinkt nicht um 3 wie üblichbei der nächsten Verteidigung in dieser Kampfrunde.Darüber hinaus sind alle Angriffe gegen den Helden biszum Ende der nächsten KR um 2 zusätzlich erschwert.","Der Verteidigungswert sinkt nicht um 3 wie üblich bei der nächsten Verteidigung in dieser Kampfrunde. Darüber hinaus sind alle Angriffe gegen den Heldenbis zum Ende der nächsten KR um 2 zusätzlich erschwertund es können im selbem Zeitraum keine Manöver gegen ihn eingesetzt werden."],"Verteidigungssituation": ["Der Held bekommt bis zum Ende der nächsten KReinen Bonus von +1 VW, allerdings sind Kampfmanöver,sofern er welche einsetzt, bis zum Ende der nächsten KRum –2 erschwert.","Der Held bekommt bis zum Ende der nächsten KReinen Bonus von +1 VW, allerdings sind Kampfmanöver,sofern er welche einsetzt, bis zum Ende der nächsten KRum –1 erschwert.","Der Held bekommt bis zum Ende der nächsten KReinen Bonus von +1 VW.","Der Held bekommt bis zum Ende der nächsten KReinen Bonus von +1 VW, Setzt er bei seiner Verteidigungein Manöver ein, erhält er einen zusätzlichen Bonus von+1 VW (also insgesamt +2 VW).","Der Held bekommt bis zum Ende der nächsten KReinen Bonus von +2 VW. Setzt er bei seiner Verteidigungein Manöver ein, erhält er einen zusätzlichen Bonus von+1 VW (also insgesamt +3 VW).","Der Held bekommt bis zum Ende der nächsten KReinen Bonus von +2 VW, Setzt er bei seiner Verteidigungein Manöver ein, erhält er einen zusätzlichen Bonus von+2 VW (also insgesamt +4 VW).","Der Held bekommt bis zum Ende der nächsten KReinen Bonus von +3 VW, Setzt er bei seiner Verteidigungein Manöver ein, erhält er einen zusätzlichen Bonus von+2 VW (also insgesamt +5 VW)."],"Gute Angriffssituation": ["Der Held bekommt bis zum Ende der nächsten KReinen Bonus von +2 AT und +2 FK allerdings nur soferner keine Basis- oder Spezialmanöver einsetzt.","Der Held bekommt bis zum Ende der nächsten KReinen Bonus von +2 AT und +2 FK, allerdings nur soferner keine Spezialmanöver einsetzt.","Der Held bekommt bis zum Ende der nächsten KReinen Bonus von +2 AT und +2 FK.","Der Held bekommt bis zum Ende der nächstenKR einen Bonus von +2 AT und +2 FK. Darüber hinaussind Basismanöver im selben Zeitraum zusätzlich um 1erleichtert.","Der Held bekommt bis zum Ende der nächsten KReinen Bonus von +2 AT und +2 FK. Darüber hinaus sindBasis- und Spezialmanöver im selben Zeitraum zusätzlich um 1 erleichtert.","Der Held bekommt bis zum Ende der nächsten KReinen Bonus von +2 AT und +2 FK. Darüber hinaus sindBasis- und Spezialmanöver im selben Zeitraum zusätzlich um 2 erleichtert."],"Herausragende Kampfsituation": ["Der Held bekommt bis zum Ende der nächsten KReinen Bonus von +2 AT, +2 FK und +1 VW, allerdings nursofern er keine Basis- oder Spezialmanöver einsetzt.","Der Held bekommt bis zum Ende der nächsten KReinen Bonus von +2 AT, +2 FK und +1 VW.","Der Held bekommt bis zum Ende der nächsten KReinen Bonus von +2 AT, +2 FK und +1 VW. Darüber hinaus sind Basis- und Spezialmanöver im selben Zeitraumzusätzlich um 1 erleichtert.","Der Held bekommt bis zum Ende der nächsten KReinen Bonus von +2 AT, +2 FK und +1 VW. Darüber hinaus sind Basis- und Spezialmanöver im selben Zeitraumzusätzlich um 2 erleichtert."],"Blöße": ["Bis zum Ende der nächsten KR sind alle Proben aufAT und FK, die gegen den Gegner gerichtet sind, um 1erleichtert, gleich ob durch den Helden oder seine Gefährten, allerdings nur sofern keine Basis- oder Spezialmanöver eingesetzt werden.","Bis zum Ende der nächsten KR sind alle Proben auf ATund FK, die gegen den Gegner gerichtet sind, um 1 erleichtert, gleich ob durch den Helden oder seine Gefährten.","Bis zum Ende der nächsten KR sind alle Proben aufAT und FK, die gegen denGegner gerichtet sind, um 1erleichtert, gleich ob durchden Helden oder seine Gefährten. Darüber hinaussind Basis- und Spezialmanöver im selben Zeitraumzusätzlich um 1 erleichtert."],"Auf dem Präsentierteller": ["Bis zum Ende der nächsten KR sind Verteidigungendes Gegners um 1 erschwert, außerdem sind Basis- undSpezialmanöver gegen ihn um 1 erleichtert gleich obdurch den Helden oder seine Gefährten.","Bis zum Ende der nächsten KR sind Verteidigungen des Gegners um 1 erschwert, außerdem sind alleProben auf AT und FK gegen ihn um 1 erleichtert gleichob durch den Helden oder seine Gefährten."],}
      },
      combat: {
        title: "Nahkampf Verteidigung",
        description: "Kritische Nahkampf Verteidigung",
        image: "img/nahkampf-verteidigung-erfolg.jpg",
        imagetitle: "Kritische Nahkampf Verteidigung",
        table: {
          "Geschickter Angriff": [
          "Der Held verfügt bis zum Ende der nächsten KR über einen Bonus von +2 auf AT gegen seinen Gegner.",
          "Wenn der Held bis zum Ende der nächsten KR ein Manöver im Nahkampf einsetzt, kann er einmalig eine Erschwernis von bis zu 2 Punkten ignorieren."
          ],
          "Geschickte Verteidigung": [
          "Der Held verfügt bis zum Ende der nächsten KR über einen Bonus von +1 auf VW gegen seinen Gegner.",
          "Der Held verfügt bis zum Ende der nächsten KR über einen Bonus von +2 auf VW gegen seinen Gegner.",
          "Der Held verfügt bis zum Ende der nächsten KR über einen Bonus von +3 auf VW gegen seinen Gegner."
          ],
          "Geschickte Kampfbewegungen": [
          "Bis zum Ende der nächsten KR sind Manöver gegen den Helden für den Gegner um 2 zusätzlich erschwert.",
          "Wenn der Gegner bis zum Ende der nächsten KR Manöver gegen den Helden einsetzt, ist die Verteidigung gegen diese um 4 Punkte erleichtert.",
          "Bis zum Ende der nächsten KR darf der Gegner keine Manöver gegen den Helden einsetzen.",
          "Bis zum Ende der nächsten KR darf der Gegner keine Spezialmanöver gegen den Helden einsetzen."
          ],
          "Äußerst geschickte Kampfbewegungen": [
          "Bis zum Ende der nächsten KR sind alle Angriffe (AT, FK) des Gegners gegen den Helden um 2 erschwert.",
          "Bis zum Ende der nächsten KR sind alle Angriffe (AT, FK) des Gegners gegen den Helden um 4 erschwert.",
          "Bis zum Ende der nächsten KR darf der Gegner keine Angriffe (AT, FK) gegen den Helden ausführen.",
          "Bis zum Ende der nächsten KR darf der Gegner keine Angriffe (AT, FK) gegen den Helden ausführen. Außerdem kann der Held in diesem Zeitraum einmalig eine Erschwernis von bis zu 1 Punkt ignorieren, wenn er ein Manöver im Nahkampf einsetzt.",
          "Bis zum Ende der nächsten KR darf der Gegner keine Angriffe (AT, FK) gegen den Helden ausführen. Außerdem kann der Held in diesem Zeitraum einmalig eine Erschwernis von bis zu 2 Punkten ignorieren, wenn er ein Manöver im Nahkampf einsetzt.",
          "Bis zum Ende der nächsten KR darf der Gegner keine Angriffe (AT, FK) gegen den Helden ausführen. Außerdem kann der Held in diesem Zeitraum einmalig eine Erschwernis von bis zu 3 Punkten ignorieren, wenn  er ein Manöver im Nahkampf einsetzt."
          ],
          "Vorteilhafte Position": [
          "Der Held muss bis zum Ende der nächsten KR nur 1 freie Aktion aufwenden, um in Vorteilhafte Position zu gelangen. Er muss dazu keine Probe ablegen.",
          "Der Held muss bis zum Ende der nächsten KR nur 1 Aktion aufwenden, um in Vorteilhafte Position zu gelangen. Er muss dazu keine Probe ablegen.",
          "Der Held befindet sich bis zum Ende der nächsten KR gegen seinen Gegner in einer Vorteilhaften Position.",
          "Der Held befindet sich bis zum Ende der nächsten KR gegen seinen Gegner in einer Vorteilhaften Position.Außerdem kann der Held in diesem Zeitraum zusätzlich einmalig eine Erschwernis von bis zu 1 Punkt ignorieren, wenn er ein Manöver im Nahkampf einsetzt.",
          "Der Held befindet sich bis zum Ende der nächsten KR gegen seinen Gegner in einer Vorteilhaften Position. Außerdem kann der Held in diesem Zeitraum zusätzlich einmalig eine Erschwernis von bis zu 2 Punkten ignorieren, wenn er ein Manöver im Nahkampf einsetzt.",
          "Der Held befindet sich bis zum Ende der nächsten KR gegen seinen Gegner in einer Vorteilhaften Position. Außerdem erhält der Held in diesem Zeitraum zusätzlich noch einen Bonus von +1 auf AT und +1 auf VW.",
          "Der Held befindet sich bis zum Ende der nächsten KR gegen seinen Gegner in einer Vorteilhaften Position. Außerdem erhält der Held in diesem Zeitraum zusätzlich noch einen Bonus von +2 auf AT und +1 auf VW."
          ],
          "Passierschlag": [
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen, dieser ist zuzüglich zu allen anderen Modifikatoren um 3 erschwert.",
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen, dieser ist zuzüglich zu allen anderen Modifikatoren um 2 erschwert.",
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen, dieser ist zuzüglich zu allen anderen Modifikatoren um 1 erschwert.",
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen.",
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen, dieser ist zuzüglich zu allen anderen Modifikatoren um 1 erleichtert. Wenn der Held den Passierschlag nutzt, ist seine AT danach bis zum Ende der nächsten KR um 1 erschwert.",
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen, dieser ist zuzüglich zu allen anderen Modifikatoren um 1 erleichtert.",
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen, dieser ist zuzüglich zu allen anderen Modifikatoren um 2 erleichtert. Wenn der Held den Passierschlag nutzt, ist seine AT danach bis zum Ende der nächsten KR um 1 erschwert.",
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen, dieser ist zuzüglich zu allen anderen Modifikatoren um 2 erleichtert."
          ],
          "Geschickter Passierschlag": [
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen, dieser ist zuzüglich zu allen anderen Modifikatoren um 3 erschwert. Abweichend von der eigentlichen Regel (siehe Regelwerk Seite 237) kann er dabei Basismanöver einsetzen.",
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen, dieser ist zuzüglich zu allen anderen Modifikatoren um 2 erschwert. Abweichend von der eigentlichen Regel (siehe Regelwerk Seite 237) kann er dabei Basismanöver einsetzen.",
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen, dieser ist zuzüglich zu allen anderen Modifikatoren um 1 erschwert. Abweichend von der eigentlichen Regel (siehe Regelwerk Seite 237) kann er dabei Basismanöver einsetzen.",
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen. Abweichend von der eigentlichen Regel (siehe Regelwerk Seite 237) kann er dabei Basismanöver einsetzen.",
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen. Abweichend von der eigentlichen Regel (siehe Regelwerk Seite 237) kann er dabei sowohl Basis- als auch Spezialmanöver einsetzen.",
          "Der Held kann sofort einen Passierschlag gegen sei-nen Gegner ausführen, dieser ist zuzüglich zu allen anderen Modifikatoren um 1 erleichtert. Abweichend von der eigentlichen Regel (siehe Regelwerk Seite 237) kann er dabei sowohl Basis- als auch Spezialmanöver einsetzen.",
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen, dieser ist zuzüglich zu allen anderen Modifikatoren um 2 erleichtert. Abweichend von der eigentlichen Regel (siehe Regelwerk Seite 237) kann er dabei sowohl Basis- als auch Spezialmanöver einsetzen."
          ],
          "Machtvoller Passierschlag": [
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen, dieser ist zuzüglich zu allen anderen Modifikatoren um 2 erschwert. Bei Gelingen richtet dieser Treffer +2 TP an.",
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen, dieser ist zuzüglich zu allen anderen Modifikatoren um 2 erschwert. Bei Gelingen richtet dieser Treffer +2 TP an und der Gegner erhält bis zum Ende der nächsten KR 1 Stufe Betäubung.",
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen, dieser ist zuzüglich zu allen anderen Modifikatoren um 2 erschwert. Bei Gelingen richtet dieser Treffer +3 TP an.",
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen, dieser ist zuzüglich zu allen anderen Modifikatoren um 2 erschwert. Bei Gelingen richtet dieser Treffer +3 TP an und der Gegner erhält bis zum Ende der nächsten KR 1 Stufe Betäubung.",
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen, dieser ist zuzüglich zu allen anderen Modifikatoren um 2 erschwert. Bei Gelingen richtet dieser Treffer +4 TP an.",
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen, dieser ist zuzüglich zu allen anderen Modifikatoren um 2 erschwert. Bei Gelingen richtet dieser Treffer +4 TP an und der Gegner erhält bis zum Ende der nächsten KR 1 Stufe Betäubung."
          ],
          "Günstige Angriffsposition": [
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen. Wenn der Held bis zum Ende der nächsten KR ein Manöver im Nahkampf einsetzt, kann er einmalig eine Erschwernis von 1 Punkt ignorieren.",
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen. Zudem verfügt der Held bis zum Ende der nächsten KR gegen seinen Gegner über einen Bonus von +1 auf AT.",
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen. Wenn der Held bis zum Ende der nächsten KR ein Manöver im Nahkampf einsetzt, kann er einmalig eine Erschwernis von bis zu 2 Punkten ignorieren.",
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen. Zudem verfügt der Held bis zum Ende der nächsten KR gegen seinen Gegner über einen Bonus von +2 auf AT."
          ],
          "Günstige Verteidigungsposition": [
          "Der Kämpfer kann sofort einen Passierschlag gegen seinen Gegner ausführen. Zudem verfügt der Held bis zum Ende der nächsten KR gegen seinen Gegner über einen Bonus von +1 auf VW.",
          "Der Kämpfer kann sofort einen Passierschlag gegen seinen Gegner ausführen. Zudem verfügt der Held bis zum Ende der nächsten KR gegen seinen Gegner über einen Bonus von +2 auf VW.",
          "Der Kämpfer kann sofort einen Passierschlag gegen seinen Gegner ausführen. Zudem verfügt der Held bis zum Ende der nächsten KR gegen seinen Gegner über einen Bonus von +3 auf VW."
          ],
          "Zwei Passierschläge": [
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen. Dieser ist zuzüglich zu allen anderen Modifikatoren um 2 erleichtert. Danach kann er einen weiteren durchführen, der nicht zuzüglich modifiziert ist.",
          "Der Held kann sofort einen Passierschlag gegen seinen Gegner ausführen. Dieser ist zuzüglich zu allen anderen Modifikatoren um 4 erleichtert. Danach kann er einen weiteren durchführen, der zuzüglich um 2 erschwert ist.",
          ]
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
