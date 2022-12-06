#!/usr/bin/python3

def multiple_returns(sentence):
    if sentence != '':
        first_char = sentence[0]
    else:
        first_char = None
    return (len(sentence), first_char)


'''
#!/usr/bin/python3
def multiple_returns(sentence):
    if len(sentence) == 0:
        return None
    else:
        return len(sentence), sentence[0]
'''
