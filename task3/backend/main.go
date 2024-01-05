package main

import (
	"fmt"
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

type Task struct {
	ID          int    `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	// Done        bool
}

func main() {
	fmt.Println("Hello World")

	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowOrigins: "*", // Allow all origins for testing
		AllowHeaders: "Origin, Content-Type, Accept",
	}))

	tasks := []Task{}

	app.Get("/healthcheck", func(c *fiber.Ctx) error {
		return c.SendString("OK")
	})

	app.Post("/tasks", func(c *fiber.Ctx) error {
		task := &Task{}

		if err := c.BodyParser(task); err != nil {
			return err
		}

		task.ID = len(tasks) + 1

		tasks = append(tasks, *task)

		return c.JSON(tasks)
	})

	app.Get("/tasks", func(c *fiber.Ctx) error {
		return c.JSON(tasks)
	})

	app.Get("/tasks/:id", func(c *fiber.Ctx) error {
		id, err := c.ParamsInt("id")
		if err != nil {
			return c.Status(400).SendString("Invalid ID")
		}

		// Assuming tasks are 1-indexed, adjust if they are 0-indexed
		if id <= 0 || id > len(tasks) {
			return c.Status(404).SendString("Task not found")
		}

		task := tasks[id-1]
		return c.JSON(task)
	})

	app.Delete("/tasks/:id", func(c *fiber.Ctx) error {
		id, err := c.ParamsInt("id")
		if err != nil {
			return c.Status(400).SendString("Invalid ID")
		}
		if id <= 0 || id > len(tasks) {
			return c.Status(404).SendString("Task not found")
		}
		tasks = append(tasks[:id-1], tasks[id:]...)

		return c.JSON(tasks)
	})

	app.Post("/completedtasks", func(c *fiber.Ctx) error {
		task := &Task{}

		if err := c.BodyParser(task); err != nil {
			return err
		}

		task.ID = len(tasks) + 1

		tasks = append(tasks, *task)

		return c.JSON(tasks)
	})

	app.Get("/completedtasks", func(c *fiber.Ctx) error {
		return c.JSON(tasks)
	})

	app.Get("/deletedtasks", func(c *fiber.Ctx) error {
		return c.JSON(tasks)
	})

	app.Post("/deletedtasks", func(c *fiber.Ctx) error {
		task := &Task{}

		if err := c.BodyParser(task); err != nil {
			return err
		}

		task.ID = len(tasks) + 1

		tasks = append(tasks, *task)

		return c.JSON(tasks)
	})

	log.Fatal(app.Listen(":8000"))

}
