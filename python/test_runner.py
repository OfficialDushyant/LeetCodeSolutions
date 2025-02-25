"""Custom test runner for colored output """
#!/usr/bin/env python
import unittest
from colorama import init, Fore
# Initialize colorama for colored output
init(autoreset=True)


class ColorTextTestResult(unittest.TextTestResult):
    def addSuccess(self, test):
        super().addSuccess(test)
        self.stream.writeln(Fore.GREEN + f"SUCCESS: {test}")

    def addError(self, test, err):
        super().addError(test, err)
        self.stream.writeln(Fore.RED + f"ERROR: {test}")

    def addFailure(self, test, err):
        super().addFailure(test, err)
        self.stream.writeln(Fore.RED + f"FAILURE: {test}")


class ColorTextTestRunner(unittest.TextTestRunner):
    resultclass = ColorTextTestResult


if __name__ == "__main__":
    loader = unittest.TestLoader()
    # Discover tests in the 'specs' directory matching '*_test.py'
    suite = loader.discover("specs", pattern="*_test.py")
    runner = ColorTextTestRunner(verbosity=2)
    runner.run(suite)
