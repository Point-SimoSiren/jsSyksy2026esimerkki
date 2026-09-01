
            //alert("Tervetuloa! Nyt on " + new Date())

            const themeSelect = document.getElementById("theme-select")

            // Asetetaan valittu teema HTML:n data-attribuutiksi.
            themeSelect.addEventListener("change", (event) => {
                const selectedTheme = event.target.value
                document.documentElement.dataset.theme = selectedTheme === "default" ? "" : selectedTheme
            })

        
            //Tähän voi lisätä downloads() funktion itse

              function support() {
                const x = `<p>Call +28298292828 or email: oicoico@dij.fi </p>`

                document.getElementById("root").innerHTML = x
            }

            function history() {
                const x = `<p>Ping Pong on kehitetty 
                    vuonna 2026 Careeria koulun oppitunnilla</p>`

                document.getElementById("root").innerHTML = x
            }

