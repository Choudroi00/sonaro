import { MessageWithParts, Plugin } from "@opencode-ai/plugin"

type InjectContract = {
  files: string[]
  agents: string[]
  prepare: (fileContent: string, agent: string, messages: MessageWithParts[]) => string | Promise<string>

}

const injects: InjectContract[] = [
  {
    files: ['.specs/skills/base.md'],
    agents: ["*"],
    prepare: (fileContent, agent, messages) => {
      const product: string[] = []
      product.push("<project_context>")
      product.push("This is the overall project context, specifications, and global guidelines:")
      product.push(fileContent)
      product.push("<project_context/>")

      return product.join("\n")
    }
  }
]

export const CoreInjecter: Plugin = async () => {
  return {
    "agent.prompt.init": async (input, output) => {
      for (const injector of injects) {
        if (!(injector.agents[0] === '*') && !injector.agents.some((_) => _ === input.agent.name)) continue
        // Exclusion in case of '*'
        if (injector.agents[0] === '*' && injector.agents.length > 1 && injector.agents.some((_) => input.agent.name)) continue
        const result: string[] = []
        for (const file of injector.files) {
          const content = await Bun.file(`${process.cwd()}/${file}`).text()
          const out = await injector.prepare(content, input.agent.name, input.history)
          result.push(out)
        }
        output.prompts.push(...result)
      }
      return output.prompts
    }
  }
} 
