#! /bin/bash

green='\033[0;32m'
clear='\033[0m'
green_check="${green}✔${clear}"

printf "Originating contracts ...\n\n"
cd contracts && chinstrap originate --force
printf "${green_check} Contracts originated\n"

printf "\nLinking contracts ...\n"
cd .. && ts-node ./setup-sandbox.ts

printf "${green_check} Contracts linked\n"
printf "${green_check} Pawn sandbox is ready"

