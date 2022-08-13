#! /bin/bash

# Pull latest contracts from remote repository.
echo "Updating remote submodule ..."
$(git submodule update --remote)

echo "Compiling contracts ..."
cd contracts && chinstrap compile

# Generate Typescript bindings.
echo "Generating types ..."
cd .. && taq generate types > /dev/null
echo "✔ Types generated."

