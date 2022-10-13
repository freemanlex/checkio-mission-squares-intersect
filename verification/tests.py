"""
TESTS is a dict with all of your tests.
Keys for this will be the categories' names.
Each test is a dict with
    "input" -- input data for a user function
    "answer" -- your right answer
    "explanation" -- not necessarily a key, it's used for an additional info in animation.
"""


TESTS = {
    "Basics": [
        {
            "input": [(2, 2, 3), (5, 5, 2)],
            "answer": True,
        },
        {
            "input": [(3, 6, 1), (8, 3, 5)],
            "answer": False,
        },
        {
            "input": [(3000, 6000, 1000), (8000, 3000, 5000)],
            "answer": False,
        },
    ],
    "Extra": [
        {
            "input": [(8, 3, 3), (9, 6, 8)],
            "answer": True,
        },
        {
            "input": [(5, 4, 8), (3, 5, 5)],
            "answer": True,
        },
        {
            "input": [(10, 6, 2), (3, 10, 7)],
            "answer": False,
        },
        {
            "input": [(5*10**6, 4*10**6, 8*10**6), (3*10**6, 5*10**6, 5*10**6)],
            "answer": True,
        },
    ]
}
