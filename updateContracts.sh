#! /bin/bash

# Pull latest contracts from remote repository.
git submodule update --remote

# Generate Typescript bindings.
taq generate types
