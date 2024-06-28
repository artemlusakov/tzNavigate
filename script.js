document.querySelector('.showMenu').addEventListener('click',function(){

    if(document.querySelector('nav').classList.contains('clos-menu')) {
        document.querySelector('nav').classList.remove('clos-menu')
        }
        else {
        document.querySelector('nav').classList.add("clos-menu")
        }

    if(document.querySelector('.navMainSection').classList.contains('clos-menu')) {
            document.querySelector('.navMainSection').classList.remove('clos-menu')
            }
            else {
            document.querySelector('.navMainSection').classList.add("clos-menu")
            }

    if(document.querySelector('.navBackgroundInfoSection').classList.contains('clos-menu')) {
        document.querySelector('.navBackgroundInfoSection').classList.remove('clos-menu')
        }
        else {
        document.querySelector('.navBackgroundInfoSection').classList.add("clos-menu")
        }

    if(document.querySelector('.navDopSection').classList.contains('clos-menu')) {
            document.querySelector('.navDopSection').classList.remove('clos-menu')
            }
            else {
            document.querySelector('.navDopSection').classList.add("clos-menu")
            }

    if(document.querySelector('.navSwitchSection').classList.contains('clos-menu')) {
                document.querySelector('.navSwitchSection').classList.remove('clos-menu')
                }
                else {
                document.querySelector('.navSwitchSection').classList.add("clos-menu")
                }
})

