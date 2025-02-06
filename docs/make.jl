using Documenter

makedocs(
    sitename = "LLM Engineering - supplement",
    format = Documenter.HTML(),

    pages = [
        "Introduction" => "index.md",
        "Blog" => "blog.md",
        "Sectie - Installation" => [
            "1 Install Docker" => "chapter1.md",
            "2 Start the MiniConda container" => "chapter3.md",
            "3 How to get ChatGPT's API key" => "chapter4.md",
            "4 Create the `.env` file for API keys" => "chapter5.md"
        ],
        "Appendix" => "appendix.md",
        "References" => "references.md"
    ]
)
