import React from 'react';
import { NavLink } from 'react-router-dom';
import "../App.css"

const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="#">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABFFBMVEX///8nJycAAADTAAD//v8lJSUfHx/QAAAiIiLUAADn5+cdHR3///0YGBj8/Px5eXn19fXt7e3h4eEKCgrFxcXFAAAVFRWvr6/MzMzr6+u1tbUQEBDT09NQUFCnp6e/v7+SkpI8PDw1NTWCgoKKioqamppxcXF6enovLy9eXl5GRkZpaWlbW1ufn586OjpKSkq9AADz2tn/9PLWaWrjr6/65uTdmJXqx8LHNjbdpKLSenjp3dnQbWi8OTPAbG7nurTLRUjCKibHUlG5FhX31NPRgoLIUUvKWlnbnJjckI7QqanYwb7g09D74dvSdnX+1tetAADQQ0LKKie9Qj+5KirSjovggX3CZWLMIRzNMzL+8efMWloNVuylAAAavElEQVR4nO1dCXubSLYtSgIjIRACJBC7xKIFYcluux3nJc9ZnDiZ99ovvWQ6M/P//8e7twrJstt2dzxylvk4yScLAXId7q271WJCatSoUaNGjRo1atSoUaNGjRo1atSoUaNGjRo1atSoUaNGjRo1atSoUaNGjRo1atSosSPoeq9tMLR7uv61W7ND9Hy37M6CqUmvQ90PFt04jPyh9rWb+HDoVrxAYgNJkkVZlpUB42YqwnR/NBrtjwWF8TaX3dBqf3dEDTfOQsvQdcMOPEFQx8tuWkY+qqjGQNgrqq7vRHacJklmtb8b7dWs0I3SdK2AiafGf+U2vdf7TiTpWz1NJ5Kx+WBmZl+xOTuHZjBB+N7VR+3R/ncinM9Bsi22pHC/WkMeC5pgbB0ZafDVWrJbaBtl9IVrJ/Lc+MPF3yO0KxqT67YlDPMHfF/v32zPzqFFV28H12U2jEcP8HW6820ZKC27UlJndONkEYYP+c7wm1LuVL964t2SYEzqWJHVZh/E0fxBX2rbu2jabnDNltA2MTIXgrS2s2Sf+1ngP+hro2IXjdsFEmvrwJqTNg3m82CWazq3qiO7+7Av9uX2v9+6HaCMt4/ykCQKSyioS6zEAisz970HxtWGaf35RY8OZ3ntkPZIoFQpobI/RXcf27OHxjVt8+t3xvZgIx+9Z/glWNJ54PhGBTxpFdaD45qeWu6kmQ9GNKNmMUnSOI6zMivLMgxda3ojnRjKGv2jB9d1fYjFDd8Bsxu5APsKrhtZluU4vm/RrynFdpBTi2goO8sNs7RbBPMppu5Fjqwz4MsETHV3ENphFifdfLYYTcVKi01Vhax/NJ8vg2uYFd0khbtdyzeG4GnhUXydDLkt6GP6xx6mtw0nKuPuYjQWaApuYwhS0H3LisK4u9wvbFBdlup/DrS27xtfnOWyJP6MzmPnzgcM4u319GtctLZTxqHxkJhMB41+0I0PhU/n4NE1342LPM+TGGsxf/Uptx/a0qFvOV9MlKkqUjqa5bEdWQZWmT7zfs1wS+sBrdUc1/0ykcBSFARBlCRVGYDlMD1PmC+K7iTNQhssIZhBY9gDg3kfcS1ajNPPD+k0w8rsx8+vNFMUwBRuAyIZIDzwBp7nobn0BoooTKej2SR2/TuKae3YG3w2Sd3ye2X62MlHz5SlODFl4R6AlEWALKkmNUdF6d/GUnPHNPjcoMdPelrYfVyObSqBohjTeylel7BK1cJe97ztHuhKdPyZjl0rIqInk12xuQ0GjbKFC5HjX+UnySBSaUAXLpOkZmz3pIViTj8zyk5SCAjHj9gdjXFMPVoQl/4VgqYY5IspRYHLnpIyW+hvqaZhCrI5G35WC7oJIcEjVvKsXExLlcZk+ed6KklcOZ0Zl7hqTpDjsLDR6DqWnWCXFRTl87rj/mxGp4/nOGzwhKblUt/5UyEqc9AlHwKDUI88kX9kpsSIsvWImzlgOizQ23NlTdP13nBYjUL6CAwZYpWmjxjjlGOLOiSMR2T+J0KU5xA8F5xKORT41aI62Lcdo80GoCBsn8xGOLZoLtdN1n07S4rFcjxYPwV1KozH0/EUdB6PI3c6eNRBkTTPxpD+yqrhevczNNtEn9Jum2hWQGfDyvqK8h8ef88Jc3nKjaxL6X6Qp6EbOYbR1n1i+MTVDYu4PXhxej2XeiJ9WAHoL6Iol6mW5NIg6d1vTgeQwwa0qihmdGYMuGSXt36tFgqYYs2lqe/rca9MdGrEc41apUqo61IihQ4l89i3U0UwncdkuAgFy4Ku2F1ogngPQVFGXlj31vywHLo04dZXHN/xxTaVAWqcTDXTdSUyCh2PBJlP9VnSpr1urtN2OtNm0UB43DLOKDSNchHSsDCm9zEchGRoepASZiKEcTQsqTtjekrviroz1AmpGwKllFHqUSOd6dTPAs2zwhERI1cgheU9MsNpCL986Y4sLxrdx9DUSQI+xRAGooAVuKRQufWld6rYQkKKBjWygJhOuCRy5I7J2I1kDQRqakygiWNWDB+rM45LE2y/HWc0nN1jTKWC6ANP98HZq3Q0H1OaC9B78Ux+lyvrQVAvUF9wIwq/hnc7qi0Sg/Zm3TZt58UQOqfPGA6j+Z3K8G9ilql6VA57xSJPpbsZei6YxZk+gDQrw5DFiL2pGap4SjH3J+6tSbMN1lmJY+h2etHtVX0vAUU10gC0NYYXy0YZOpodyPSRAvAyU7WZG7pWPLbvcRdemxSmu5DVJXh9azLzQyNQ80qvZcmjQtDNIn+4lUdqPYyT5LEfaEBpSYDSPqFWJhAaMYsaetogtKAfUr8LumFG9zTzs9C5duSkpp75k8wPaOQJd5lTeZ8QKmeestBIO6CDpJxkyUKeX13OcytIJqej+XI+H2GxjvgU1XTO2BBqh5TQ0IaX0qaakrlUF1InUgVq4LNVduT3mx3GUDs8+C92bBS0Z4E/juZqvJBHS0mVb+mOUheSkOlUBtegpaYwiGZuPhiLtz6P0aybZuDiUekKCdVUF7KIamIcUZ29TNOI9qZJRNvTruGqwoAFG9IDh0X+wBCEeHD67Pnqvw/J0C5ERaFGOGsbZa7sZ6o4n6TduTmQb7Qd3L07EES0myN/BF2G+mPxDoGLkjAdj8fzABw+qKA8t4x54tDeqOvQ4Sh3aHucW9TYL+BlPGuXqiDGYAHEwa7yi87Zi36/0fpV0xLPk6CVpuPGsT1aLAbJVBAVcVZGYT72PHVLlkAtUwRphlMWpoY3BRegil5wt/HFkgD4+7yA/uUYwcyhfrCAlyW+zAOIhdnL/lyPwVzBF01nk3w3SWLnTX8P0HpHEpPLYJANo6m9VCcjkVWlZNUMMsew4oUHYXKVLBiky6IrsIPT2J440FDZiv40bVZiT1BjSP8c6uCLFSwtao3mEY32Ry51R1OSsyLRPICIfTfG9GDV2Gs1Go2PEIPxVsgzgs5QLVJlrXayRAeFbZCeFeaBB/kA+KqZJE4xkg78GbbESNsFLe7xL/yLgkAEKxXMLRqxlzmSG8+B3HhkU3skkYUsiPAr5CLckaU5WLX2Go29xstD0q0oKiSmcSJLPt3uWJJKvaL0dSxSR6EGLZEgKk0hEejOiQZZ4agY5n/GEB4fqKkRjCPqLveR1xx4CRAqhuNR6ZVjmQDBpev3SLu3I4/febW31wAt3fv9kNgSc9nQUWi3kD3XNk3lmvWQB6a6n2cOzqxcSB4kFpFvQPY0F9Jy3LME5XZa2wCDpJYTyaXheAzRrzTKvFIYxWo2HaVKOpV7VFASbFj6ebWPe/ATqClwbPRfHZNeShWMu0iKRkb0dScdmd51wYhAk06X3TEGV/qYZkRTZBHSKA0y3ZumBs2LLEmSoqiqOhgMPHMApnLumCUt1XFqxuooVVNxNJESeb9QCmUKLhMS4J7jJLsKvzVyvkItbbUaq9MOaedUAqdM0KIJdBk7Wi+aCFSVxBstl9B3E92C8MygLE6FZDZcbi6TMF+X0EdsxuRs242iMGQePTFTb5wrE2VUSLk0XkgLeTqXR94kVAQ1JT3NKXYVtHWa5Px1Y4/Jce/JGbQzp4o64wGbrJh0NInahtsd08ENlsiwR0GGQ1ESzRDey0mxFqI662kaGV5p2jp6MyD0Ue1JoeTqOJADaToSxhLIWcUnMk6GoMWgQ7pv7UyGELR1jl/10dyAKPtvT6ARE9PbCr+UARWK0nHs7gh84hZL5ixyI5b9YFT4pO1bZVCdlhdYOU3SLPVv2AtrGivyzDIHU1VSTBOspjAKiqS0LccHJRjDIwIb3dO13SVPIESi/QgWFTsjdseTDhmmirctMOx70jIN3azYVzaixNAYUgEb2xKPyVQI0kV1jmaua0/CcpLEcRanaQLo5kWed3MPOoDpOmWaxiVEh0DLsbA4tRwJpjlg95uM3Y6nd57/2m80WvBvr9X/9ahD9FK4MXYhitLAGxdpMllU4RnOhAZz6LDCfVSGpixVt0i57/hlO12mWezoDOtROjAncIG3nKRxOoE4TgDvanoKWCO0RSoOicji2NDAy+6UIqjq6QpjG2Z0+i9PD6HNS6rcjDTBNqoqxBtcFSFwdIyYBlHqFw41rsqPbAYD5AqyaU+udyebiqMx3iuhhZUUFbixGSzzZTe2I3ukiEGOH6RGsNv8EBKMQ4jfgCD4RpDk6s1PhPhdb3BbNL3+bABE5p4Sp0lM3TQw1jVkeWE4lgUpERgg287imGlpkkySBCMW1rlNvkRjlmSpZeAM+ar4UchKbvm+k+yYIME0ihw862MEt8fsav8COmQv26d3xykDcPmlOYiW0UIeGKKbVEL0SteN3DAqlEBLs3abjaiySQyVnCUhdR3D5xwqJkPMkX0rHUiLyThIdl2l6SCapHPyqo8mFYQIP/rP34GyWjNTvYMhVhTJkvrUl0Wp8Kk1EDCZlKu0J3YNY7JVzuj5ISco77MPN0uJtJ5hhWk3mIsQ2svC44w78UQfzOrJi35lVoFkf/X0gJB2JtObCWIlRAiOe9SQWe4eRktRnhVUHXR93kjD5Z1QGzphshhTWum8aVS8HLdM8yBYFEkI5jRfTkG8jzgmwxQV5fi2zy0O65WrF0coyIIObkv+sP6uW4vQlAY0zAZoX41wgZZif5anpW2HcXc2xoVEA7QpA6YN4jxZLPfHc1wm5UKf8yFjGZsmH4jMH3lKBlBEjhfAkWsqdsrXT89BVOUtphUY+SgMG8efSpYdKnLs64ab5WBwq8EXEwIXlFOWpTm7aTwv8m63WwT7U0ECn+9tB4WKNJol4a0D5/8+mqxqgyHA+TPOEVwH+pD+27NDDLgE86bZEb2St0XP15U51ZzOYpxr2+v1hm0ATnLDiVPBvlTdLoOjwJj8lq4tKZ5JPWHxOLqKStoEVcVeefB0xXWVxQGN/us357j8Kfe8G4GAN40jx82lrcxJlJkz8LA+M8X1bCZEK4p8e1/mlMHNQsqiqiPoktbNSG93AHZNNKoYAHTI8btP4Dz2qjhgr8F7pO4ubnRJEVy2d2vrRYZ7aGEkwxzjfDYpXchTvvRM/ubZ2xXzjYwkmp1L8JFEt2emeY9A7gMmjBDJMBEzfx9GxnpKTqdzf3N2TK76eX654kEOl+Ne/7f3B9CQnlvItxmeW0mxqTcgLJxiJYxAXBByOxtepHN4fHJ29Lf/+d8vuyazuXk9fvePfiVC7JBA8sW7n1CSVoI54520UFSQ1IMKitP9RZ5A1OkbV7UX7fD44OT0/eXF8+cXb/52ctzkImze0Z7HQof91s7JD6s1R+Yn+6u371CSxLALFWw9ZgasUqGoqsc9hDRf5BPm7oztitLh8f+dHb37ePnq51/6/dWHD2+fHh0csjPNzpdV0itAMNdBQT7hgsTUg0V1qydvTljbhlHZLQA55IJlaEPG1742162DwjoCaf3w4smnD6tVHz1Qf/WP3388q8gR/iibiC/KrYmug/96fDm5fN3nxQ6egKAoX707P77ZqI52iJyga318+uztz59WfcQey1taLZDcL2+fnp4fNsnVV3PhfSURbuPw6KLKrxosdEX70//0/Nmbd6eAd+/fvHl6efH2t5evPyGlNbhPZXHDL79eouC+ASq3AnMPcnz6os/E2GJ2Z28tTUaJ6W+rxYXM3nALDKdXT37YcGt+C9K6Dc1qHO7gx59X69yDV+gaPIKtPErlV3jE1//w4cXldodrfj2L8mdgIoQX7D8/nb6q1LBRgVFq8dSSseyvPr34/ePRupsyO8KN1jcM/uyrNh6fXT5Z9TkbrrYA1NbVL09eXb4/Oz8+vDKozcqgfA2H99noVF0JoB0cPf31JZrK1afXL397+8PT96fXmPEO1+HcNrr5zWrp7QBnx3B4+H21+6/iBqv/OJJrZ92s+lbnS4ckj49msyrScRO7KWb9x6BDeAmSH3T+o7hxXOt1ne/MRNaoUaPG9wNMJ7YrGlXNYNsOsxptc+N1ODq7j496bY7re3MN29vAM3r1/sZ9OC2hfQNrQtrB6dNnz55dvseyDuOBQdDxAccx4bFCk+gH64+OMZtkdekdIliv4xlM51dLHLvXNtXDEbOwer++JGFHM3gYN3bgo9X+PIenmGS1Gphafbo8ZxRRZhcrjguCIsQrz1ZrfHr5L6yu71aK+5s6vSgrNF3z3qre46xgQqqp33xeFmCGx0pMiHVjlZTHl5qcvawSf17a+HUtxJN+i6fO/9B49tgkHzfpNJZFnh/slB/pXW+fyQWgjbeK2vKMMVqvbqpqoPxyF4R7Y0qbx4bl36+qAgev2exd8ruanVe8utxorQ4IG+3qkB94MbaqjLQ+HOxUiD5f7mJ6VaGer5kYbk8XVZhg98VrItL5CgvQ2ckNhhT74Y84EYlXqBjR/rsqeD3pr6tw/TPWC0GMT3ixYD180LjYIT9CXOQijl073WctlfNt3gxsH4vemoc8YhaJz77AhRFznBXDVVjGywd6B3oWk0gLi204HNnqn+AwM7B8VakjsHnPB/XI4Ypp899P31+w59JYHe+SYYwtx8l3RGN6yAnYnLfvMPQ2nBkra+vJwDsLd/Tg9y4cPIA2/9YAdo1W/+3RwfHB2dNPe/1jrnknfNSOFV9fMYYd8lOfSRlpHfH6z9kuGbK5vSqbk8tIiAL2swR5y9t7HkWbFRg4cY2QjC2SWaxPb+wOw2kfa46t1VHVn/755sMhT7kumDb+/TXy/OWQ+8ezPuoyP3rBinanu2TIVoIM2Cwr1vnkMcqQiURNt66L+UyDdefjT0baXMF6sVlN1uq8ZCLsHxFehcSx8yZzcic48bq1+uklG677iWku+ZEZmRcsCbvAkmTraIcEdT47nU3SYcuzZLaNF1u75m2vXGGznJVEFSqHwdyJut7V7MruoFDOV6wcfrlJ+ztNzgVEiB3tgvyLzb8+YiEMecYqyM/wKg2NTgM67e7ADIaoMA8QbASnswkScoADS0XATjJTajpMklQjmnJleMm6l/IFWR3yjtn+fuXXqhkQeOKkz06ckPfMbj7lBca3bBz2I16B6g3afUh2B4u7BcPw7Tk2WqTDTYNx6Z0sSyZep3FqwxyfwiBcm9L1HCYbV5GK+5wHuWRDjU+0bbfGKgEXjNivHbAoqKY/M1uqfWihbf3x4ODsss/q5m92SJBkbIGrSNczDvja12hw5d74RC4ua0Fj3OURqRYcrr8GV7pUJghnyDMH/vsNv40iRILgB8lBn02AYAHa8Yq5QhziYXX01m87HaLqbo9Vi1K1uDfbYqiwfRyYrEXcFEtm2skWt10t/GV2R6nsTucFdsPW05vlHFBHHAN4jpMhXzKff4KfnjPV3WusR5nfHu80MOVLzqoV9eJ64w2+eELxTM/zKNuaK0TOuBSIr7yalKjSSvfa12zszgsWfP1+PQ3qoCFFIb3HSvkLZkx/xI9P96oJgy0csfr5tEN2WbzTmGqKzHQqySZ9Yi5ETSKEy1h3lco5aDhLRhxNWH9c70umm9fszsUt/ZAZUh6tsSFHFtT9gDL8iCFA4xML8lbnHZ6A7IzhkPlxlacH5tpuaLyTbc/zZHaWbSbHNFicCtvu5Jrd6ZA3aDoaq43N5+XGkxWn1diMMrZeorzQg+y13r9ip96zsbwdMnS4k+dqKc2qT9u8wdvzy64499RN2rHJFaNtuwNBCufw/JCPHjKxgAjXEwL5f0wwIADtdP7Bwpwj8CSQSWLC0dnlUDGz8mAwKiFUMok2MecavS3OySaXUNaTSTJVuJo92yGHH1pMSC8OeEv/efRfLCJlQ+Q42FjlHMysYtwNzM47r9BTNH7F+GCHhoa1VppUtkWs9ndgGZ84jhnSjYMEZ4FnjWop39Yz6PKV3NVRkzytUt/+vz6enr5/9QllxXshG/fvV9MZGi0wNT+xGBauOFmhckOot9PR/gULYzK2mwyaDm7vq4xPYWCBir0tpPVS9qvInG33st4PEefgrCpN5OPErdcsnEENvagqMucX2PkgfoO4G2UIV3RYT2y8Pt7pGA8LmFk6xFc38p612CphiGzH0nRbSOvNXTbbz+vXwljMac/61YwGpnl7bwl5xbj2z9e/+R1zf5+aLIDba7xl9Q120+Uuq21bATMXIo+7t1c5cUGx5Ehar3sc8Sdw05Su7Q4EYuRotVdNzkD7+ZRVZ+AIaxl81IplGXsQuz5jVC9Rbq/Q/mCyvDuGPsVZaXw3z+4A32NQ02OfVjCZ4o5x/tpmR0WbX7BxJw47Ntd2h+nYyfM+n1iE1uWUi7CxOuisTesxW8UCve45+/mO3cM+23tyqO2MooNzrru8etZm77u5Toxi0t0gRxXWC3y7WTSnVZeu/aeVsxuuf/fh0b8+caPy+uLg+PcfEB95pRjNpfaUfXJ0eMl+nqAF7bz5oTr4HoBSODw4OTk5P9Zunrg1Kuvc8f5bBfTFjaph9Z5nTyxVbLLJKPyg06lGyxmpJh83ByX5xilWQxT8R7MiV81s4BOImlezdMlmuJzT5HOT/vOGzWs8CrKQROAp9HSGC0f8FCzokBjdLt8NMZ4kuIgnYimhHi/QVdroTVybaF2f6HDW6nZjPG1lYIw1Yk0mcJh2U9zqrTtJ7vi9Xw4+9SHY0YWFG8xxDS/bfd4yI14QDmfTGBhO0ZfqwtKed/m2hyRNIPnydB2CPVtgnEm4ABerkXCMh0pZ4NcNHvbHB3aLlEI4E8kY+TjE2mcMHVmvEhAbizL+dAmNjlSN9NrbDIOCMZz7LCYI55YNh+ESD2UnQ4aC/6jblv016BiGhRjGKdaGobkeHQwxDM8z/CsJ9pyEAzh5xdAQMmToLdnFoToaoQwVPJyq+NcyLO8xN4D8q9DNNtNVyG+BGu0ZdEiccVlVn1CGOm4EYkBY6pIQNwBLNI0zHDqgqFzMBDUartTwB0B2Mdiz7tra7YuCyZDEQAJ704KN7VqUTHmGVYLw4gD/chAfHgalm1Doo0kXbmzDbT38mAXyZUCGINKS0hEogu/C+wg3Vvrq0Pif6dKrbazZ8Lw+xP/sY7CIuGBEG26u0XtwB65/xRuH7M929apLtfb6cKjjf23Y++b+7kyNGjVq1KhRo0aNGjVq1KhRo0aNGjVq1KhRo0aNGjVq1KhRo0aNGjVq1KhRo0aNGt82/h+5LpGMnfsjLQAAAABJRU5ErkJggg==" style={{ borderRadius: "50%" }} width="100" height="90" className="" alt="image path not found" />
                    </NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/allquestion">All Question</NavLink>
                            </li>
                            
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/booking_table">Booking Table</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}



export default Navbar;