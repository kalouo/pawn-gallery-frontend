
export const ContractsTestNftStep000Cont0ContractCode: { __type: 'ContractsTestNftStep000Cont0ContractCode', protocol: string, code: object[] } = {
    __type: 'ContractsTestNftStep000Cont0ContractCode',
    protocol: 'PsDELPH1Kxsxt8f9eWbxQeRxkjfbxoqM52jvs5Y5fBxWWh4ifpo',
    code: JSON.parse(`[{"prim":"parameter","args":[{"prim":"or","args":[{"prim":"or","args":[{"prim":"or","args":[{"prim":"pair","annots":["%balance_of"],"args":[{"prim":"list","annots":["%requests"],"args":[{"prim":"pair","args":[{"prim":"address","annots":["%owner"]},{"prim":"nat","annots":["%token_id"]}]}]},{"prim":"contract","annots":["%callback"],"args":[{"prim":"list","args":[{"prim":"pair","args":[{"prim":"pair","annots":["%request"],"args":[{"prim":"address","annots":["%owner"]},{"prim":"nat","annots":["%token_id"]}]},{"prim":"nat","annots":["%balance"]}]}]}]}]},{"prim":"list","annots":["%burn"],"args":[{"prim":"pair","args":[{"prim":"address","annots":["%from_"]},{"prim":"pair","args":[{"prim":"nat","annots":["%token_id"]},{"prim":"nat","annots":["%amount"]}]}]}]}]},{"prim":"or","args":[{"prim":"list","annots":["%mint"],"args":[{"prim":"pair","args":[{"prim":"address","annots":["%to_"]},{"prim":"map","annots":["%metadata"],"args":[{"prim":"string"},{"prim":"bytes"}]}]}]},{"prim":"address","annots":["%set_administrator"]}]}]},{"prim":"or","args":[{"prim":"or","args":[{"prim":"big_map","annots":["%set_metadata"],"args":[{"prim":"string"},{"prim":"bytes"}]},{"prim":"list","annots":["%transfer"],"args":[{"prim":"pair","args":[{"prim":"address","annots":["%from_"]},{"prim":"list","annots":["%txs"],"args":[{"prim":"pair","args":[{"prim":"address","annots":["%to_"]},{"prim":"pair","args":[{"prim":"nat","annots":["%token_id"]},{"prim":"nat","annots":["%amount"]}]}]}]}]}]}]},{"prim":"or","args":[{"prim":"list","annots":["%update_operators"],"args":[{"prim":"or","args":[{"prim":"pair","annots":["%add_operator"],"args":[{"prim":"address","annots":["%owner"]},{"prim":"pair","args":[{"prim":"address","annots":["%operator"]},{"prim":"nat","annots":["%token_id"]}]}]},{"prim":"pair","annots":["%remove_operator"],"args":[{"prim":"address","annots":["%owner"]},{"prim":"pair","args":[{"prim":"address","annots":["%operator"]},{"prim":"nat","annots":["%token_id"]}]}]}]}]},{"prim":"pair","annots":["%withdraw_mutez"],"args":[{"prim":"mutez","annots":["%amount"]},{"prim":"address","annots":["%destination"]}]}]}]}]}]},{"prim":"storage","args":[{"prim":"pair","args":[{"prim":"pair","args":[{"prim":"address","annots":["%administrator"]},{"prim":"pair","args":[{"prim":"nat","annots":["%last_token_id"]},{"prim":"big_map","annots":["%ledger"],"args":[{"prim":"nat"},{"prim":"address"}]}]}]},{"prim":"pair","args":[{"prim":"big_map","annots":["%metadata"],"args":[{"prim":"string"},{"prim":"bytes"}]},{"prim":"pair","args":[{"prim":"big_map","annots":["%operators"],"args":[{"prim":"pair","args":[{"prim":"address","annots":["%owner"]},{"prim":"pair","args":[{"prim":"address","annots":["%operator"]},{"prim":"nat","annots":["%token_id"]}]}]},{"prim":"unit"}]},{"prim":"big_map","annots":["%token_metadata"],"args":[{"prim":"nat"},{"prim":"pair","args":[{"prim":"nat","annots":["%token_id"]},{"prim":"map","annots":["%token_info"],"args":[{"prim":"string"},{"prim":"bytes"}]}]}]}]}]}]}]},{"prim":"code","args":[[[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]],{"prim":"IF_LEFT","args":[[{"prim":"IF_LEFT","args":[[{"prim":"IF_LEFT","args":[[{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"DUP"},[{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"3"}]}],{"prim":"CDR"},{"prim":"PUSH","args":[{"prim":"mutez"},{"int":"0"}]},[{"prim":"DIP","args":[{"int":"4"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"5"}]}],{"prim":"CAR"},{"prim":"MAP","args":[[[{"prim":"DIP","args":[{"int":"6"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"7"}]}],{"prim":"GET","args":[{"int":"6"}]},{"prim":"SWAP"},{"prim":"DUP"},{"prim":"DUG","args":[{"int":"2"}]},{"prim":"CDR"},{"prim":"MEM"},{"prim":"IF","args":[[],[{"prim":"PUSH","args":[{"prim":"string"},{"string":"FA2_TOKEN_UNDEFINED"}]},{"prim":"FAILWITH"}]]},{"prim":"DUP"},{"prim":"CAR"},[{"prim":"DIP","args":[{"int":"7"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"8"}]}],{"prim":"CAR"},{"prim":"GET","args":[{"int":"4"}]},[{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"3"}]}],{"prim":"CDR"},{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"int"},{"int":"370"}]},{"prim":"FAILWITH"}],[]]},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"IF","args":[[{"prim":"PUSH","args":[{"prim":"nat"},{"int":"1"}]}],[{"prim":"PUSH","args":[{"prim":"nat"},{"int":"0"}]}]]},{"prim":"SWAP"},{"prim":"PAIR"}]]},{"prim":"DIG","args":[{"int":"4"}]},{"prim":"DROP"},{"prim":"DIG","args":[{"int":"4"}]},{"prim":"DROP"},{"prim":"TRANSFER_TOKENS"},{"prim":"CONS"}],[{"prim":"DUP"},{"prim":"ITER","args":[[[{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"3"}]}],{"prim":"GET","args":[{"int":"6"}]},{"prim":"SWAP"},{"prim":"DUP"},{"prim":"DUG","args":[{"int":"2"}]},{"prim":"GET","args":[{"int":"3"}]},{"prim":"MEM"},{"prim":"IF","args":[[],[{"prim":"PUSH","args":[{"prim":"string"},{"string":"FA2_TOKEN_UNDEFINED"}]},{"prim":"FAILWITH"}]]},{"prim":"DUP"},{"prim":"CAR"},{"prim":"SENDER"},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"IF","args":[[{"prim":"PUSH","args":[{"prim":"bool"},{"prim":"True"}]}],[[{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"3"}]}],{"prim":"GET","args":[{"int":"5"}]},{"prim":"SWAP"},{"prim":"DUP"},{"prim":"DUG","args":[{"int":"2"}]},{"prim":"GET","args":[{"int":"3"}]},{"prim":"SENDER"},[{"prim":"DIP","args":[{"int":"3"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"4"}]}],{"prim":"CAR"},{"prim":"PAIR","args":[{"int":"3"}]},{"prim":"MEM"}]]},{"prim":"IF","args":[[],[{"prim":"PUSH","args":[{"prim":"string"},{"string":"FA2_NOT_OPERATOR"}]},{"prim":"FAILWITH"}]]},{"prim":"DUP"},{"prim":"GET","args":[{"int":"4"}]},{"prim":"PUSH","args":[{"prim":"nat"},{"int":"0"}]},{"prim":"COMPARE"},{"prim":"LT"},{"prim":"IF","args":[[{"prim":"DUP"},{"prim":"GET","args":[{"int":"4"}]},{"prim":"PUSH","args":[{"prim":"nat"},{"int":"1"}]},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"IF","args":[[{"prim":"DUP"},{"prim":"CAR"},[{"prim":"DIP","args":[{"int":"3"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"4"}]}],{"prim":"CAR"},{"prim":"GET","args":[{"int":"4"}]},[{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"3"}]}],{"prim":"GET","args":[{"int":"3"}]},{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"int"},{"int":"703"}]},{"prim":"FAILWITH"}],[]]},{"prim":"COMPARE"},{"prim":"EQ"}],[{"prim":"PUSH","args":[{"prim":"bool"},{"prim":"False"}]}]]},{"prim":"IF","args":[[],[{"prim":"PUSH","args":[{"prim":"string"},{"string":"FA2_INSUFFICIENT_BALANCE"}]},{"prim":"FAILWITH"}]]},{"prim":"DIG","args":[{"int":"2"}]},[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]],[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]],{"prim":"SWAP"},[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]],{"prim":"SWAP"},{"prim":"NONE","args":[{"prim":"address"}]},[{"prim":"DIP","args":[{"int":"5"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"6"}]}],{"prim":"GET","args":[{"int":"3"}]},{"prim":"UPDATE"},{"prim":"SWAP"},{"prim":"PAIR"},{"prim":"SWAP"},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"DUP"},{"prim":"GET","args":[{"int":"6"}]},{"prim":"NONE","args":[{"prim":"pair","args":[{"prim":"nat"},{"prim":"map","args":[{"prim":"string"},{"prim":"bytes"}]}]}]},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"GET","args":[{"int":"3"}]},{"prim":"UPDATE"},{"prim":"UPDATE","args":[{"int":"6"}]},{"prim":"SWAP"}],[{"prim":"DROP"}]]}]]},{"prim":"DROP"},{"prim":"NIL","args":[{"prim":"operation"}]}]]}],[{"prim":"IF_LEFT","args":[[{"prim":"SWAP"},{"prim":"DUP"},{"prim":"DUG","args":[{"int":"2"}]},{"prim":"CAR"},{"prim":"CAR"},{"prim":"SENDER"},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"IF","args":[[],[{"prim":"PUSH","args":[{"prim":"string"},{"string":"FA2_NOT_ADMIN"}]},{"prim":"FAILWITH"}]]},{"prim":"DUP"},{"prim":"ITER","args":[[[{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"3"}]}],{"prim":"CAR"},{"prim":"GET","args":[{"int":"3"}]},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"DUP"},{"prim":"GET","args":[{"int":"6"}]},[{"prim":"DIP","args":[{"int":"3"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"4"}]}],{"prim":"CDR"},[{"prim":"DIP","args":[{"int":"3"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"4"}]}],{"prim":"PAIR"},{"prim":"SOME"},[{"prim":"DIP","args":[{"int":"3"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"4"}]}],{"prim":"UPDATE"},{"prim":"UPDATE","args":[{"int":"6"}]},[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]],[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]],{"prim":"SWAP"},[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]],{"prim":"SWAP"},{"prim":"DIG","args":[{"int":"5"}]},{"prim":"CAR"},{"prim":"SOME"},{"prim":"DIG","args":[{"int":"5"}]},{"prim":"UPDATE"},{"prim":"SWAP"},{"prim":"PUSH","args":[{"prim":"nat"},{"int":"1"}]},{"prim":"ADD"},{"prim":"PAIR"},{"prim":"SWAP"},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"SWAP"}]]},{"prim":"DROP"}],[{"prim":"SWAP"},{"prim":"DUP"},{"prim":"DUG","args":[{"int":"2"}]},{"prim":"CAR"},{"prim":"CAR"},{"prim":"SENDER"},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"IF","args":[[],[{"prim":"PUSH","args":[{"prim":"string"},{"string":"FA2_NOT_ADMIN"}]},{"prim":"FAILWITH"}]]},{"prim":"SWAP"},[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]],{"prim":"CDR"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"PAIR"},{"prim":"PAIR"}]]},{"prim":"NIL","args":[{"prim":"operation"}]}]]}],[{"prim":"IF_LEFT","args":[[{"prim":"IF_LEFT","args":[[{"prim":"SWAP"},{"prim":"DUP"},{"prim":"DUG","args":[{"int":"2"}]},{"prim":"CAR"},{"prim":"CAR"},{"prim":"SENDER"},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"IF","args":[[],[{"prim":"PUSH","args":[{"prim":"string"},{"string":"FA2_NOT_ADMIN"}]},{"prim":"FAILWITH"}]]},{"prim":"UPDATE","args":[{"int":"3"}]}],[{"prim":"DUP"},{"prim":"ITER","args":[[{"prim":"DUP"},{"prim":"CDR"},{"prim":"ITER","args":[[[{"prim":"DIP","args":[{"int":"3"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"4"}]}],{"prim":"GET","args":[{"int":"6"}]},{"prim":"SWAP"},{"prim":"DUP"},{"prim":"DUG","args":[{"int":"2"}]},{"prim":"GET","args":[{"int":"3"}]},{"prim":"MEM"},{"prim":"IF","args":[[],[{"prim":"PUSH","args":[{"prim":"string"},{"string":"FA2_TOKEN_UNDEFINED"}]},{"prim":"FAILWITH"}]]},{"prim":"SWAP"},{"prim":"DUP"},{"prim":"DUG","args":[{"int":"2"}]},{"prim":"CAR"},{"prim":"SENDER"},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"IF","args":[[{"prim":"PUSH","args":[{"prim":"bool"},{"prim":"True"}]}],[[{"prim":"DIP","args":[{"int":"3"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"4"}]}],{"prim":"GET","args":[{"int":"5"}]},{"prim":"SWAP"},{"prim":"DUP"},{"prim":"DUG","args":[{"int":"2"}]},{"prim":"GET","args":[{"int":"3"}]},{"prim":"SENDER"},[{"prim":"DIP","args":[{"int":"4"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"5"}]}],{"prim":"CAR"},{"prim":"PAIR","args":[{"int":"3"}]},{"prim":"MEM"}]]},{"prim":"IF","args":[[],[{"prim":"PUSH","args":[{"prim":"string"},{"string":"FA2_NOT_OPERATOR"}]},{"prim":"FAILWITH"}]]},{"prim":"DUP"},{"prim":"GET","args":[{"int":"4"}]},{"prim":"PUSH","args":[{"prim":"nat"},{"int":"0"}]},{"prim":"COMPARE"},{"prim":"LT"},{"prim":"IF","args":[[{"prim":"DUP"},{"prim":"GET","args":[{"int":"4"}]},{"prim":"PUSH","args":[{"prim":"nat"},{"int":"1"}]},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"IF","args":[[{"prim":"SWAP"},{"prim":"DUP"},{"prim":"DUG","args":[{"int":"2"}]},{"prim":"CAR"},[{"prim":"DIP","args":[{"int":"4"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"5"}]}],{"prim":"CAR"},{"prim":"GET","args":[{"int":"4"}]},[{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"3"}]}],{"prim":"GET","args":[{"int":"3"}]},{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"int"},{"int":"378"}]},{"prim":"FAILWITH"}],[]]},{"prim":"COMPARE"},{"prim":"EQ"}],[{"prim":"PUSH","args":[{"prim":"bool"},{"prim":"False"}]}]]},{"prim":"IF","args":[[],[{"prim":"PUSH","args":[{"prim":"string"},{"string":"FA2_INSUFFICIENT_BALANCE"}]},{"prim":"FAILWITH"}]]},{"prim":"DIG","args":[{"int":"3"}]},[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]],[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]],{"prim":"SWAP"},[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]],{"prim":"SWAP"},[{"prim":"DIP","args":[{"int":"4"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"5"}]}],{"prim":"CAR"},{"prim":"SOME"},{"prim":"DIG","args":[{"int":"5"}]},{"prim":"GET","args":[{"int":"3"}]},{"prim":"UPDATE"},{"prim":"SWAP"},{"prim":"PAIR"},{"prim":"SWAP"},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"DUG","args":[{"int":"2"}]}],[{"prim":"DROP"}]]}]]},{"prim":"DROP"}]]},{"prim":"DROP"}]]},{"prim":"NIL","args":[{"prim":"operation"}]}],[{"prim":"IF_LEFT","args":[[{"prim":"DUP"},{"prim":"ITER","args":[[{"prim":"IF_LEFT","args":[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"SENDER"},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"IF","args":[[],[{"prim":"PUSH","args":[{"prim":"string"},{"string":"FA2_NOT_OWNER"}]},{"prim":"FAILWITH"}]]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"DUP"},{"prim":"GET","args":[{"int":"5"}]},{"prim":"PUSH","args":[{"prim":"option","args":[{"prim":"unit"}]},{"prim":"Some","args":[{"prim":"Unit"}]}]},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"UPDATE"},{"prim":"UPDATE","args":[{"int":"5"}]},{"prim":"SWAP"}],[{"prim":"DUP"},{"prim":"CAR"},{"prim":"SENDER"},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"IF","args":[[],[{"prim":"PUSH","args":[{"prim":"string"},{"string":"FA2_NOT_OWNER"}]},{"prim":"FAILWITH"}]]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"DUP"},{"prim":"GET","args":[{"int":"5"}]},{"prim":"NONE","args":[{"prim":"unit"}]},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"UPDATE"},{"prim":"UPDATE","args":[{"int":"5"}]},{"prim":"SWAP"}]]}]]},{"prim":"DROP"},{"prim":"NIL","args":[{"prim":"operation"}]}],[{"prim":"SWAP"},{"prim":"DUP"},{"prim":"DUG","args":[{"int":"2"}]},{"prim":"CAR"},{"prim":"CAR"},{"prim":"SENDER"},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"IF","args":[[],[{"prim":"PUSH","args":[{"prim":"string"},{"string":"FA2_NOT_ADMIN"}]},{"prim":"FAILWITH"}]]},{"prim":"DUP"},{"prim":"CDR"},{"prim":"CONTRACT","args":[{"prim":"unit"}]},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"int"},{"int":"546"}]},{"prim":"FAILWITH"}],[]]},{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"SWAP"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"CAR"},{"prim":"UNIT"},{"prim":"TRANSFER_TOKENS"},{"prim":"CONS"}]]}]]}]]},{"prim":"PAIR"}]]},{"prim":"view","args":[{"string":"get_balance_of"},{"prim":"list","args":[{"prim":"pair","args":[{"prim":"address","annots":["%owner"]},{"prim":"nat","annots":["%token_id"]}]}]},{"prim":"list","args":[{"prim":"pair","args":[{"prim":"pair","annots":["%request"],"args":[{"prim":"address","annots":["%owner"]},{"prim":"nat","annots":["%token_id"]}]},{"prim":"nat","annots":["%balance"]}]}]},[[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]],{"prim":"DUP"},{"prim":"MAP","args":[[[{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"3"}]}],{"prim":"GET","args":[{"int":"6"}]},{"prim":"SWAP"},{"prim":"DUP"},{"prim":"DUG","args":[{"int":"2"}]},{"prim":"CDR"},{"prim":"MEM"},{"prim":"IF","args":[[],[{"prim":"PUSH","args":[{"prim":"string"},{"string":"FA2_TOKEN_UNDEFINED"}]},{"prim":"FAILWITH"}]]},{"prim":"DUP"},{"prim":"CAR"},[{"prim":"DIP","args":[{"int":"3"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"4"}]}],{"prim":"CAR"},{"prim":"GET","args":[{"int":"4"}]},[{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"3"}]}],{"prim":"CDR"},{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"int"},{"int":"370"}]},{"prim":"FAILWITH"}],[]]},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"IF","args":[[{"prim":"PUSH","args":[{"prim":"nat"},{"int":"1"}]}],[{"prim":"PUSH","args":[{"prim":"nat"},{"int":"0"}]}]]},{"prim":"SWAP"},{"prim":"PAIR"}]]},{"prim":"SWAP"},{"prim":"DROP"},{"prim":"SWAP"},{"prim":"DROP"}]]}]`)
};
