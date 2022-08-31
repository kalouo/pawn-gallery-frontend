#! /bin/bash
green='\033[0;32m'
clear='\033[0m'
green_check="${green}✔${clear}"

printf "Compiling contracts ..."
cd contracts && chinstrap compile

# Generate Typescript bindings.
echo "Generating types ..."
cd .. && taq generate types > /dev/null
printf "${green_check} Types generated\n"

