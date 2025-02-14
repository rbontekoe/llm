using Documenter

makedocs(
    sitename = "LLM Engineering - supplement",
    format = Documenter.HTML(),

    pages = [
        "Introduction" => "index.md",
        "Blog" => "blog.md",
        "Sectie - Installation" => [
            "1 Install Docker" => "chapter1.md",
            "2 Create and start the MiniConda container" => "chapter2.md",
            "3 How to get ChatGPT's API key" => "chapter3.md",
            "4 Create the `.env` file for API keys" => "chapter4.md"
        ],
        "Appendix" => "appendix.md",
        "References" => "references.md"
    ]
)
