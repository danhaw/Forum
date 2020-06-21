using System.Collections.Generic;
using Forum.Model;

namespace  Forum.Data
{
    public interface ITopicRepository 
    {
         bool SaveChanges();
         IEnumerable<Topic> GetAllTopics();
         Topic GetTopicById(int id);
         void CreateTopic(Topic topic);
         void UpdateTopic(Topic topic);
         void DeleteTopic(Topic topic);
    }
}