#!/usr/bin/env bash

set -o xtrace    # expands variables and prints a little + sign before the line
set -o errexit   # abort on nonzero exitstatus
set -o nounset   # abort on unbound variable
set -o pipefail  # don't hide errors within pipes

mvn package
cp handlers/target/*.jar assets/

cd cdk
cdk synth && cdk deploy