
export const ContractsCollateralVaultStep000Cont0ContractCode: { __type: 'ContractsCollateralVaultStep000Cont0ContractCode', protocol: string, code: object[] } = {
    __type: 'ContractsCollateralVaultStep000Cont0ContractCode',
    protocol: 'PsDELPH1Kxsxt8f9eWbxQeRxkjfbxoqM52jvs5Y5fBxWWh4ifpo',
    code: JSON.parse(`[{"prim":"parameter","args":[{"prim":"or","args":[{"prim":"pair","annots":["%deposit"],"args":[{"prim":"pair","args":[{"prim":"nat","annots":["%amount"]},{"prim":"address","annots":["%collateral_contract"]}]},{"prim":"pair","args":[{"prim":"nat","annots":["%collateral_token_id"]},{"prim":"pair","args":[{"prim":"nat","annots":["%deposit_id"]},{"prim":"address","annots":["%depositor"]}]}]}]},{"prim":"or","args":[{"prim":"address","annots":["%set_owner"]},{"prim":"pair","annots":["%withdraw"],"args":[{"prim":"nat","annots":["%deposit_id"]},{"prim":"address","annots":["%recipient"]}]}]}]}]},{"prim":"storage","args":[{"prim":"pair","args":[{"prim":"big_map","annots":["%deposits"],"args":[{"prim":"nat"},{"prim":"pair","args":[{"prim":"address","annots":["%collateral_contract"]},{"prim":"pair","args":[{"prim":"nat","annots":["%collateral_token_id"]},{"prim":"nat","annots":["%deposit_amount"]}]}]}]},{"prim":"address","annots":["%owner"]}]}]},{"prim":"code","args":[[[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]],{"prim":"IF_LEFT","args":[[{"prim":"SENDER"},[{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"3"}]}],{"prim":"CDR"},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"IF","args":[[],[{"prim":"PUSH","args":[{"prim":"string"},{"string":"Ownable: caller is not the owner"}]},{"prim":"FAILWITH"}]]},{"prim":"DUP"},{"prim":"CAR"},{"prim":"CDR"},{"prim":"CONTRACT","annots":["%transfer"],"args":[{"prim":"list","args":[{"prim":"pair","args":[{"prim":"address","annots":["%from_"]},{"prim":"list","annots":["%txs"],"args":[{"prim":"pair","args":[{"prim":"address","annots":["%to_"]},{"prim":"pair","args":[{"prim":"nat","annots":["%token_id"]},{"prim":"nat","annots":["%amount"]}]}]}]}]}]}]},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"int"},{"int":"82"}]},{"prim":"FAILWITH"}],[]]},{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"SWAP"},{"prim":"PUSH","args":[{"prim":"mutez"},{"int":"0"}]},{"prim":"NIL","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"list","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"pair","args":[{"prim":"nat"},{"prim":"nat"}]}]}]}]}]},{"prim":"NIL","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"pair","args":[{"prim":"nat"},{"prim":"nat"}]}]}]},{"prim":"DIG","args":[{"int":"5"}]},{"prim":"DUP"},{"prim":"CAR"},{"prim":"CAR"},{"prim":"SWAP"},{"prim":"DUP"},{"prim":"DUG","args":[{"int":"7"}]},{"prim":"GET","args":[{"int":"3"}]},{"prim":"SELF_ADDRESS"},{"prim":"PAIR","args":[{"int":"3"}]},{"prim":"CONS"},[{"prim":"DIP","args":[{"int":"5"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"6"}]}],{"prim":"GET","args":[{"int":"6"}]},{"prim":"PAIR"},{"prim":"CONS"},{"prim":"TRANSFER_TOKENS"},{"prim":"CONS"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"DUP"},{"prim":"CAR"},{"prim":"CAR"},{"prim":"SWAP"},{"prim":"DUP"},{"prim":"GET","args":[{"int":"3"}]},{"prim":"SWAP"},{"prim":"DUP"},{"prim":"DUG","args":[{"int":"6"}]},{"prim":"CAR"},{"prim":"CDR"},{"prim":"PAIR","args":[{"int":"3"}]},{"prim":"SOME"},{"prim":"DIG","args":[{"int":"4"}]},{"prim":"GET","args":[{"int":"5"}]},{"prim":"UPDATE"},{"prim":"UPDATE","args":[{"int":"1"}]},{"prim":"SWAP"}],[{"prim":"IF_LEFT","args":[[{"prim":"SENDER"},[{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"3"}]}],{"prim":"CDR"},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"IF","args":[[],[{"prim":"PUSH","args":[{"prim":"string"},{"string":"Ownable: caller is not the owner"}]},{"prim":"FAILWITH"}]]},{"prim":"UPDATE","args":[{"int":"2"}]},{"prim":"NIL","args":[{"prim":"operation"}]}],[{"prim":"SENDER"},[{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"3"}]}],{"prim":"CDR"},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"IF","args":[[],[{"prim":"PUSH","args":[{"prim":"string"},{"string":"Ownable: caller is not the owner"}]},{"prim":"FAILWITH"}]]},{"prim":"SWAP"},{"prim":"DUP"},{"prim":"DUG","args":[{"int":"2"}]},{"prim":"CAR"},{"prim":"SWAP"},{"prim":"DUP"},{"prim":"DUG","args":[{"int":"2"}]},{"prim":"CAR"},{"prim":"MEM"},{"prim":"IF","args":[[],[{"prim":"PUSH","args":[{"prim":"string"},{"string":"WrongCondition: self.data.deposits.contains(params.deposit_id)"}]},{"prim":"FAILWITH"}]]},{"prim":"NIL","args":[{"prim":"operation"}]},[{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"3"}]}],{"prim":"CAR"},[{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"3"}]}],{"prim":"CAR"},{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"int"},{"int":"75"}]},{"prim":"FAILWITH"}],[]]},{"prim":"CAR"},{"prim":"CONTRACT","annots":["%transfer"],"args":[{"prim":"list","args":[{"prim":"pair","args":[{"prim":"address","annots":["%from_"]},{"prim":"list","annots":["%txs"],"args":[{"prim":"pair","args":[{"prim":"address","annots":["%to_"]},{"prim":"pair","args":[{"prim":"nat","annots":["%token_id"]},{"prim":"nat","annots":["%amount"]}]}]}]}]}]}]},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"int"},{"int":"82"}]},{"prim":"FAILWITH"}],[]]},{"prim":"PUSH","args":[{"prim":"mutez"},{"int":"0"}]},{"prim":"NIL","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"list","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"pair","args":[{"prim":"nat"},{"prim":"nat"}]}]}]}]}]},{"prim":"NIL","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"pair","args":[{"prim":"nat"},{"prim":"nat"}]}]}]},[{"prim":"DIP","args":[{"int":"6"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"7"}]}],{"prim":"CAR"},[{"prim":"DIP","args":[{"int":"6"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"7"}]}],{"prim":"CAR"},{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"int"},{"int":"75"}]},{"prim":"FAILWITH"}],[]]},{"prim":"GET","args":[{"int":"4"}]},[{"prim":"DIP","args":[{"int":"7"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"8"}]}],{"prim":"CAR"},[{"prim":"DIP","args":[{"int":"7"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"8"}]}],{"prim":"CAR"},{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"int"},{"int":"75"}]},{"prim":"FAILWITH"}],[]]},{"prim":"GET","args":[{"int":"3"}]},[{"prim":"DIP","args":[{"int":"7"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"8"}]}],{"prim":"CDR"},{"prim":"PAIR","args":[{"int":"3"}]},{"prim":"CONS"},{"prim":"SELF_ADDRESS"},{"prim":"PAIR"},{"prim":"CONS"},{"prim":"TRANSFER_TOKENS"},{"prim":"CONS"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"DUP"},{"prim":"CAR"},{"prim":"NONE","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"pair","args":[{"prim":"nat"},{"prim":"nat"}]}]}]},{"prim":"DIG","args":[{"int":"4"}]},{"prim":"CAR"},{"prim":"UPDATE"},{"prim":"UPDATE","args":[{"int":"1"}]},{"prim":"SWAP"}]]}]]},{"prim":"PAIR"}]]}]`)
};
